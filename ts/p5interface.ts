declare function createCanvas(r: number, g: number): P5;
declare function ellipse(a: number, b:number, r: number, g: number): P5;
declare function line(a: number, b:number, r: number, g: number): P5;
declare function rect(a: number, b:number, r: number, g: number): P5;
declare function color(a: number, b:number, c: number): any;
declare function fill(a: number): P5;
declare function stroke(a: number): P5;
declare function strokeWeight(a: number): P5;
declare function clear(): P5;
declare function noLoop(): P5;
declare function loop(): P5;
declare function text(a: string, b: number, c: number): P5;
declare function mouseClicked(): P5;
declare function keyPressed(): P5;
declare function frameRate(a: number): P5;
declare var mouseX: number;
declare var mouseY: number;
declare var keyCode: number;

interface P5 {}
