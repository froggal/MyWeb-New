// 클릭시 정확한 위치로 이동

function locationTo(dom) {
    let target = document.querySelector(dom);
    const clientRect = window.pageYOffset + target.getBoundingClientRect().top;
    window.scrollTo(0, (clientRect-50));
}