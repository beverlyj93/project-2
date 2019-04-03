$('#uh').click(() => {
    let data = {
        name: 'test',
        age: 25
    }

    $.post('/api/test', data, result => {
        console.log(`result: ${result}`);
        $('body').html(result.name);
    })
})