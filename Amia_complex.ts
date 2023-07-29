export class complex{
real: number
imag: number
    constructor(real: number, imag: number){
    this.real = real;
    this.imag = imag;
    }
    abs(){
      return  (Math.sqrt(this.real * this.real + this.imag * this.imag))
    }
    abs2(){
      return  (this.real * this.real + this.imag * this.imag)
    }
    con(){
    const z = new complex(this.real, -this.imag);
    return z;
    }
    toString(){
        if(this.imag >= 0){
            const z = this.real.toString() + '+' + this.imag.toString() + 'i';
            return z;
        }
        else{
            const z = this.real.toString() + this.imag.toString() + 'i';
            return z;
        }
    }
}
export let x: any;
export let y: any;
export function add(x: complex, y: complex){
    const real = x.real + y.real;
    const imag = x.imag + y.imag;
    const z = new complex(real, imag);
    return z;
}
export function sub(x: complex, y: complex){
    const real = x.real - y.real;
    const imag = x.imag - y.imag;
    const z = new complex(real, imag);
    return z;
}
export function mul(x: complex, y: complex){
    const real = x.real * y.real - x.imag * y.imag;
    const imag = x.real * y.imag + x.imag * y.real;
    const z = new complex(real, imag);
    return z;
}
export function div(x: complex, y: complex){
    const k = y.con();
    const amia = new complex(1/y.abs2(), 0);
    const z = mul(x, mul(k,amia));
    return z;
}
