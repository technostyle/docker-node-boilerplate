console.log('helloWorld')
try {
    const publicUrl = process.env.PUBLIC_URL;
    const div = document.createElement('div');
    div.innerText = `ENV VARIABLE PUBLIC_URL: ${publicUrl}`;
    document.body.append(div);
} catch (e) {console.error}