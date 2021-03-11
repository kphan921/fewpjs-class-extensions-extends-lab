class Polygon {
    constructor(arr) {
        this.side = arr;
    }

    get countSides() {
        return this.side.length;
    }

    get perimeter() {
        return this.side.reduce((s, n) => s + n, 0)
    }

}

class Triangle extends Polygon {
    constructor(arr) {
        super(arr)
    }

    get isValid() {
    let a = this.side[0];
    let b = this.side[1];
    let c = this.side[2];
    return a+b<c? false : a+c<b? false : b+c<a? false :true;
    }
}

class Square extends Polygon {
    constructor(arr) {
        super(arr)
    }

    get isValid() {
        return this.side.filter(x=>x===this.side[0]).length ===4? true:false
        // for(let i = 0; i < this.side.length -1; i++) {
        //     if(this.side[i] !== this.side[i+1]) {
        //         return false;
        //     }
        // }
        // return true;
    }

    get area() {
        return this.side[0] * this.side[0]
    }
}