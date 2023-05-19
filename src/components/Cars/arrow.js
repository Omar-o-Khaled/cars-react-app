document.addEventListener('click', leftHandle)

function leftHandle(ele) {
    if (ele.target.closest('.left') || ele.target.closest('.right')) {

        let ul = document.querySelector('.ulBoxsContainer');
        let li = ul.firstElementChild
        let cssObj = window.getComputedStyle(ul, null);
        let gap = cssObj.getPropertyValue("gap");

        if (ele.target.closest('.left')) {
            ul.scrollLeft -= li.getBoundingClientRect().width + parseInt(gap)
        }
        if (ele.target.closest('.right')) {
            ul.scrollLeft += li.getBoundingClientRect().width + parseInt(gap)
        }
    }
    if (ele.target.id == 'errorCount') {
        ele.target.style.width = '0'
    }
}

document.addEventListener('drag', dragHandle)

function dragHandle(ele) {
    if (ele.target.closest('.ulBoxsContainer') || ele.target.className == 'ulBoxsContainer') {
        let ul = document.querySelector('.ulBoxsContainer');
        let li = ul.firstElementChild
        let cssObj = window.getComputedStyle(ul, null);
        let gap = cssObj.getPropertyValue("gap");

        if (ul.scrollLeft >= 0 && ul.scrollLeft < ul.getBoundingClientRect().width - 100) {
            ul.scrollLeft += li.getBoundingClientRect().width + parseInt(gap)
        } else {
            ul.scrollLeft = 0
        }
    }
}
