$(function () {

    let newtask = $('#newtask')
    let addtask = $('#newbtn')
    let todolist = $('#todolist')

    addtask.click(function () {
        let newTask = newtask.val()
        $.post(
            '/todos/',
            {task : newTask},
            function (data) {
                todolist.empty()
                let todo;
                for(todo of data){
                    todolist.append("<li>"+todo.task+"</li>")
                }


            }
            )



    })

});