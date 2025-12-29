"use client";

import { useEffect, useRef } from "react";

const FluidBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext("webgl");
    if (!gl) {
      console.error("WebGL not supported");
      return;
    }

    // --- CONFIGURATION (From your request) ---
    const config = {
      color1: "#171717",
      color2: "#2b8591",
      balance: -0.2,
      contrast: 2.0,
      scale: 0.35,
      speed: 0.1,
      // Noise settings
      ax: 2.0,
      ay: 2.0,
      az: 9.0,
      aw: 13.0,
      bx: 0.0,
      by: 1.0,
    };

    // --- SHADERS ---
    const vertexShaderSource = `
      attribute vec2 position;
      void main() {
        gl_Position = vec4(position, 0.0, 1.0);
      }
    `;

    // Mouse logic removed from here
    const fragmentShaderSource = `
      precision highp float;
      
      uniform vec2 u_resolution;
      uniform float u_time;
      uniform vec3 u_color1;
      uniform vec3 u_color2;
      uniform float u_scale;
      uniform float u_balance;
      uniform float u_contrast;

      // Noise Uniforms
      uniform float ax, ay, az, aw;
      uniform float bx, by;

      float cheapNoise(vec3 stp) {
        vec3 p = vec3(stp.xy, stp.z);
        vec4 a = vec4(ax, ay, az, aw);
        return mix(
          sin(p.z + p.x * a.x + cos(p.x * a.x - p.z)) * cos(p.z + p.y * a.y + cos(p.y * a.x + p.z)),
          sin(1. + p.x * a.z + p.z + cos(p.y * a.w - p.z)) * cos(1. + p.y * a.w + p.z + cos(p.x * a.x + p.z)), 
          0.436
        );
      }

      void main() {
        vec2 uv = gl_FragCoord.xy / u_resolution.xy;
        float aspect = u_resolution.x / u_resolution.y;
        uv.x *= aspect;
        
        // Scale
        vec2 st = uv * u_scale;
        
        float S = sin(u_time * 0.05);
        float C = cos(u_time * 0.05);

        vec2 v1 = vec2(
          cheapNoise(vec3(st, 2.0)), 
          cheapNoise(vec3(st, 1.0))
        );
        
        vec2 v2 = vec2(
          cheapNoise(vec3(st + bx*v1 + vec2(C * 1.7, S * 9.2), 0.15 * u_time)),
          cheapNoise(vec3(st + by*v1 + vec2(S * 8.3, C * 2.8), 0.126 * u_time))
        );
        
        float n = 0.5 + 0.5 * cheapNoise(vec3(st + v2, 0.0));

        // Color & Contrast
        n = n + u_balance;
        n = (n - 0.5) * u_contrast + 0.5;
        n = clamp(n, 0.0, 1.0);

        vec3 finalColor = mix(u_color1, u_color2, n);
        
        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    // --- COMPILE SHADERS ---
    function createShader(
      gl: WebGLRenderingContext,
      type: number,
      source: string
    ) {
      const shader = gl.createShader(type);
      if (!shader) {
        console.error("Unable to create shader");
        return null;
      }
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    }

    const vertexShader = createShader(gl, gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = createShader(
      gl,
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    if (!vertexShader || !fragmentShader) {
      return;
    }

    const program = gl.createProgram();
    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      return;
    }
    gl.useProgram(program);

    // --- BUFFERS ---
    const positionBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
      gl.STATIC_DRAW
    );

    const posLoc = gl.getAttribLocation(program, "position");
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);

    // --- UNIFORMS ---
    const locs = {
      res: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      c1: gl.getUniformLocation(program, "u_color1"),
      c2: gl.getUniformLocation(program, "u_color2"),
      scale: gl.getUniformLocation(program, "u_scale"),
      balance: gl.getUniformLocation(program, "u_balance"),
      contrast: gl.getUniformLocation(program, "u_contrast"),
      ax: gl.getUniformLocation(program, "ax"),
      ay: gl.getUniformLocation(program, "ay"),
      az: gl.getUniformLocation(program, "az"),
      aw: gl.getUniformLocation(program, "aw"),
      bx: gl.getUniformLocation(program, "bx"),
      by: gl.getUniformLocation(program, "by"),
    };

    function hexToRgb(hex: string): [number, number, number] {
      const r = parseInt(hex.slice(1, 3), 16) / 255;
      const g = parseInt(hex.slice(3, 5), 16) / 255;
      const b = parseInt(hex.slice(5, 7), 16) / 255;
      return [r, g, b];
    }

    // --- RENDER LOOP ---
    let animationFrameId: number;
    const render = (time: number) => {
      time *= 0.001;

      // Handle Resize automatically within render to keep it responsive
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;
      if (canvas.width !== displayWidth || canvas.height !== displayHeight) {
        canvas.width = displayWidth;
        canvas.height = displayHeight;
        gl.viewport(0, 0, gl.drawingBufferWidth, gl.drawingBufferHeight);
      }

      gl.uniform2f(locs.res, canvas.width, canvas.height);
      gl.uniform1f(locs.time, time * config.speed);

      const c1 = hexToRgb(config.color1);
      const c2 = hexToRgb(config.color2);
      gl.uniform3f(locs.c1, c1[0], c1[1], c1[2]);
      gl.uniform3f(locs.c2, c2[0], c2[1], c2[2]);

      gl.uniform1f(locs.scale, config.scale);
      gl.uniform1f(locs.balance, config.balance);
      gl.uniform1f(locs.contrast, config.contrast);
      gl.uniform1f(locs.ax, config.ax);
      gl.uniform1f(locs.ay, config.ay);
      gl.uniform1f(locs.az, config.az);
      gl.uniform1f(locs.aw, config.aw);
      gl.uniform1f(locs.bx, config.bx);
      gl.uniform1f(locs.by, config.by);

      gl.drawArrays(gl.TRIANGLES, 0, 6);
      animationFrameId = requestAnimationFrame(render);
    };

    render(0);

    // --- CLEANUP ---
    return () => {
      cancelAnimationFrame(animationFrameId);
      // Optional: Delete webgl resources if component unmounts frequently
      gl.deleteProgram(program);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full bg-black" style={{ borderRadius: 'inherit' }} />;
};

export default FluidBackground;
