class ArrayList {
    constructor() {
        this.arrayList = {};
        this.position = 0;
    }

    length() {
        return Object.keys(this.arrayList).length;
    }

    push(value) {
        this.arrayList[this.position] = value;
        this.position++;
        return this.arrayList;
    }

    pop() {
        if (this.length > 0) {
            const response = this.arrayList[this.position]
            delete this.arrayList[this.position];
            this.position--;
            return response;
        } return {};
    }

    get(index) {
        return this.arrayList[index];
    }

    delete(index) {
        const element = this.get(index);
        if (element) {
          delete this.arrayList[index];
          this.position--;
          for (let i = index + 1; i < this.length(); i++) {
            const tempItem = this.arrayList[i];
            this.arrayList[i - 1] = tempItem;
          }
          delete this.arrayList[this.position];
          return this.arrayList;
        } return "Element doesn't exists.";
    }
}

const arrayList = new ArrayList();

console.log(arrayList.push(1));
console.log(arrayList.push(2));
console.log(arrayList.push(3));
console.log(arrayList.push(4));
console.log(arrayList.delete(1));
console.log(arrayList.push(5));
console.log(arrayList.get(7));
