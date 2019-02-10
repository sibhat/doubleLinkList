class Node {
    constructor(val){
        this.val = val;
        this.prev = null;
        this.next = null;
    }
}


class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    push(val) {
        var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
            this.tail = node;
         }
            this.length++;
        return this;
    }
    unshift(val){
         var node = new Node(val);
        if (this.head === null) {
            this.head = node;
            this.tail = this.head;
        }else{
            node.next = this.head;
            this.head.prev = node;
            this.head = node;
        }
            this.length++;
    }
    insert(index, val){
        if(index < 0 || index > this.length) return false;
        if(index === 0) return this.unshift(val);
        if(index === this.length) return this.push(val);
        let counter = 0;
        let node = this.head;
        while(counter <= index){
            if(counter === index){
                let newNode = new Node(val);
                newNode.next = node.next;
                newNode.prev = node;
                node.next.prev = newNode;
                node.next = newNode;
                this.length ++;
                return true;
            }
            node = node.next;
            counter ++;
        }

    }
    shift(){
        if(this.length === 0) return undefined;
        let node = this.head;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.head.prev = null;
            this.head = node.next;
        }
        this.length --;
        return node;
    }
    pop(){
        if(this.length === 0) return undefined;
        let node = this.tail;
        if(this.length === 1){
            this.head = null;
            this.tail = null;
        }else{
            this.tail = node.prev;
            this.tail.next = null;
        }
        this.length --;
        return node;
    }
    remove(index){
        if(index < 0 || index > this.length) return undefined;
        if(index === 0) return this.shift();
        if(index === this.length) return this.pop();
        let counter = 0;
        let node = this.head;
        while(counter <= index){
            if(counter === index){
                let nextNode = node.next;
                let prevNode = node.prev;
                prevNode.next = nextNode;
                nextNode.prev = prevNode;
                this.length --;
                return node;
            }
            node = node.next;
            counter ++;
        }
    }
    reverse(){
        if(this.length === 0) return undefined;
        let node = this.head;
        this.head = this.tail;
        this.tail = node;
        let prev = null;
        let next;
        while(node){
            next = node.next;
            node.next = prev;
            node.prev = next;
            prev = node;
            node = next;
        }
        return this;
    }
}
