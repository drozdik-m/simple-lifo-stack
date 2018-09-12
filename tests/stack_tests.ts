declare module "assert-testing";
import { Testing } from "assert-testing";
import { Stack } from "../src/stack.js";

function TestStack ()
{
    let testing = new Testing("Stack");
    testing.StartTestingLog();

    //NUMBER
    let stack1 = new Stack<number>();
    for (let i = 0; i < 10; i++)
        stack1.Push(i);
    testing.Assert(!stack1.Empty());
    testing.Assert(stack1.Size() === 10);
    for (let i = 9; i >= 0; i--)
    {
        testing.Assert(stack1.Top() === i);
        stack1.Pop();
    }
    testing.Assert(stack1.Empty());
    for (let i = 0; i < 10; i++)
        stack1.Push(i);
    testing.Assert(!stack1.Empty());
    stack1.Clear();
    testing.Assert(stack1.Empty());
    testing.Assert(stack1.Top() === null);

    //STRING
    let stack2 = new Stack<string>();
    for (let i = 0; i < 10; i++)
        stack2.Push(i.toString());
    testing.Assert(!stack2.Empty());
    testing.Assert(stack2.Size() === 10);
    for (let i = 9; i >= 0; i--)
    {
        testing.Assert(stack2.Top() === i.toString());
        stack2.Pop();
    }
    testing.Assert(stack2.Empty());
    for (let i = 0; i < 10; i++)
        stack2.Push(i.toString());
    testing.Assert(!stack2.Empty());
    stack2.Clear();
    testing.Assert(stack2.Empty());
    testing.Assert(stack2.Top() === null);

    testing.EndTestingLog();
}

TestStack();