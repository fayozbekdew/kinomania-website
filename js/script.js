"use strict";

window.addEventListener('DOMContentLoaded', () => {

    const parentContent = document.querySelector('.tabheader__items')
    const tabContent = document.querySelectorAll('.tabcontent')
    const tabContentItem = document.querySelectorAll('.tabheader__item')
    const loader = document.querySelector('.loader')

    // LOADER
    setTimeout(() => {
        loader.style.opacity = '0'
        setTimeout(() => {
            loader.style.display = 'none'
        }, 500)
    }, 3000)

    // CATEGORY


    function hideContent() {
        tabContent.forEach((e) => {
            e.classList.add('hide')
            e.classList.remove('show')
            tabContentItem.forEach((e) => {
                e.classList.remove('tabheader__item_active')
            })
        })
    }

    function showContent(idx = 0) {
        tabContent[idx].classList.add('show')
        tabContent[idx].classList.remove('hide')
        tabContentItem[idx].classList.add('tabheader__item_active')
    }

    parentContent.addEventListener('click', (e) => {
        const target = e.target

        if (target && target.classList.contains('tabheader__item')) {
            tabContentItem.forEach((item, idx) => {
                if (target === item) {
                    hideContent()
                    showContent(idx)
                }
            })
        }
    })

    hideContent()
    showContent()


    // TimeElement

    const deadLine = '2023-11-04'

    function getTimeRemaining(endTime) {
        let days, hours, minutes, seconds;
        const timer = Date.parse(endTime) - Date.parse(new Date())
        if(timer <= 0 ){
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        }else{
            days = Math.round(timer / (1000 * 60 * 60 * 24)),
            hours = Math.round((timer / (1000 * 60 * 60 * 24)) % 24),
            minutes = Math.round((timer / 1000 / 60) % 60),
            seconds = Math.round((timer / 1000) % 60)
        }
        

        return{ timer, days, hours, minutes, seconds }
    }
    function setClock(selector, endTime){
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

            updateClock()

    function updateClock(){
        const t = getTimeRemaining(endTime)

        days.innerHTML = t.days
        hours.innerHTML = t.hours
        minutes.innerHTML = t.minutes
        seconds.innerHTML = t.seconds
        
        if (t.timer <= 0 ) {
            clearInterval(timeInterval)
        }
    }
    }
    setClock('.timer', deadLine)


    // MODAL
    const phoneBtn = document.querySelector('.phone')
    const modal = document.querySelector('.modal')
    const modalClose = document.querySelector('.modal__close')
    const readMoreBtn = document.querySelector('.arrow')

    const startModal = () => {
        modal.classList.add('show')
        document.body.style.overflow = 'hidden'
    }
    const exitModal = () => {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    phoneBtn.addEventListener('click', () => {
startModal()
    })
    readMoreBtn.addEventListener('click', () => {
        startModal()
    })
    modalClose.addEventListener('click', () =>{
       exitModal()
    })
    modal.addEventListener('click', (e) => {
        if(e.target == modal){
            exitModal()
        }
    })
    document.addEventListener('keydown', (e) => {
        if(e.code === 'Escape' && modal.classList.contains('show')){
            exitModal()
        }
    })
})