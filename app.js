const social = document.querySelector('.open_share');
const shareBtn = document.getElementById('share');
const removeBtn = document.getElementById('remove-share')

shareBtn.addEventListener('click', () => {
    social.classList.add('clicked')
})

removeBtn.addEventListener('click', () => {
    social.classList.remove('clicked')
})