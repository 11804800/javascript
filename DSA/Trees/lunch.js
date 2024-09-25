class Queue {
  constructor(data) {
    this.data = data;
    this.size = data;
    this.front = -1;
    this.arr = new Array(this.size);
    this.rear=-1;
  }

  enqueue(data) {
    if(this.rear==(this.size-1))
    {
        return ;
    }
     
    if(this.front==-1)
    {
        this.front++;
    }
    this.rear++;
    this.arr[this.rear]=data;
  }

  dequeue() {
    if (this.isEmpty()) {
        return ;
    }

    for(let i=this.front;i<this.rear;i++)
    {
        this.arr[i]=this.arr[i+1];
    }

    this.arr[this.rear]=0;
    this.rear--;
    
  }

  isEmpty()
  {
    if(this.rear==-1 && this.front==-1)
    {
        return true;
    }

    return false;
  }

  print() {
    if (this.front == -1) {
      console.log("empty");
      return;
    }
    for (let i = this.front; i <= this.rear; i++) {
      console.log(this.arr[i]);
    }
  }

  length()
  {
    return this.rear+1;
  }

  getfront()
  {
    return this.arr[this.front];
  }

  getrear()
  {
    return this.arr[this.rear];
  }
}


function Unable(std,snd)
{
    const stack=[];
    const ob=new Queue(std.length);
    let top=-1;

    snd.forEach((item)=>{
        top++;
        stack[top]=item;
    });

    std.forEach((item)=>{
        ob.enqueue(item)
    });

    let Unable=0;

    while(ob.length()+1)
        {

            if(ob.getfront()===stack[top])
            {
                Unable=0;
                ob.dequeue();
                stack.pop();
                top--;
            }
            else
            {
                let elm=ob.getfront();
                ob.dequeue();
                ob.enqueue(elm);
                Unable++;
                if(Unable===ob.length())
                {
                    break;
                }
            }
        }

        console.log(ob.length()+1);

}

Unable([1,1,1,0,0,1],[1,0,0,0,1,1]);

