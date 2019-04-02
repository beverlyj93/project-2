$('#uh').click(() => {
    let data = {
        name: 'test',
        age: 25
    }

    $.post('/api/test', data, () => {
        location.reload();
    })
})