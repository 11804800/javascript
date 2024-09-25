class stack{
    constructor(data)
    {
        this.top=-1;
        this.size=data;
        this.arr=new Array(this.size);
    }

    push(data)
    {
        this.top++;

        if(this.top>this.size-1)
        {
            console.log("Cannot push");
            return ;
        }

        this.arr[this.top]=data;
    }

    pop()
    {
        if(this.top<0)
        {
            console.log("underflow");
            return;
        }
        let x=this.arr[this.top];
        this.top--;
        return x;
    }

}

function reverse()
{
    let str="Internshala";

    const ob=new stack(str.length);

    for(let i=0;i<str.length;i++)
    {
        ob.push(str[i]);
    }

    let revstr="";

    for(let i=0;i<str.length;i++)
    {
        let x=ob.pop();
        revstr+=x;
    }

    console.log(str+"   "+revstr);
}

reverse();