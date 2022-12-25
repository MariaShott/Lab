let xml = new XMLHttpRequest()
let size = document.querySelector('.size');
let download = document.querySelector('.download');
let link = document.querySelector('.text_file');
let inptAddImg = document.querySelector('#add_file')

  .addEventListener('change', () => {
    let preview = document.querySelector('#img_file');
    let file = document.querySelector('#add_file').files[0];
    let reader = new FileReader();
    download.setAttribute('max', file.size);
    xml.open('POST', 'https://isidea.ru/rgups_file.php', true);
    xml.upload.onprogress = a => {
      download.value = a.loaded;
    }
    xml.upload.onload = () => {
      reader.onload = () => {
        preview.src = reader.result;
    }
    
    if (file) {
      reader.readAsDataURL(file);
      link.textContent = file.name;
      size.textContent = Math.round(file.size/1) + "[GB]"
    }
  }
  xml.send(file);
});
