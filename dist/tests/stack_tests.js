exports.__esModule = true;
var assert_testing_1 = require("assert-testing");
var stack_js_1 = require("../src/stack.js");
function TestStack() {
    var testing = new assert_testing_1.Testing("Stack");
    testing.StartTestingLog();
    //NUMBER
    var stack1 = new stack_js_1.Stack();
    for (var i = 0; i < 10; i++)
        stack1.Push(i);
    testing.Assert(!stack1.Empty());
    testing.Assert(stack1.Size() === 10);
    for (var i = 9; i >= 0; i--) {
        testing.Assert(stack1.Top() === i);
        stack1.Pop();
    }
    testing.Assert(stack1.Empty());
    for (var i = 0; i < 10; i++)
        stack1.Push(i);
    testing.Assert(!stack1.Empty());
    stack1.Clear();
    testing.Assert(stack1.Empty());
    testing.Assert(stack1.Top() === null);
    //STRING
    var stack2 = new stack_js_1.Stack();
    for (var i = 0; i < 10; i++)
        stack2.Push(i.toString());
    testing.Assert(!stack2.Empty());
    testing.Assert(stack2.Size() === 10);
    for (var i = 9; i >= 0; i--) {
        testing.Assert(stack2.Top() === i.toString());
        stack2.Pop();
    }
    testing.Assert(stack2.Empty());
    for (var i = 0; i < 10; i++)
        stack2.Push(i.toString());
    testing.Assert(!stack2.Empty());
    stack2.Clear();
    testing.Assert(stack2.Empty());
    testing.Assert(stack2.Top() === null);
    testing.EndTestingLog();
}
TestStack();
