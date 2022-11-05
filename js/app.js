$(function(){
    let searchicon = $('.searchicon')
    let searcharear = $('.searcharea')
    let crossicon = $('.crossicon')
    let firstquestion1 = $('.first1')
    let firstanswer1 = $('.answer1')
    let firstquestion2 = $('.first2')
    let firstanswer2 = $('.answer2')
    let firstquestion3 = $('.first3')
    let firstanswer3 = $('.answer3')
    let firstquestion4 = $('.first4')
    let firstanswer4 = $('.answer4')
    let firstquestion5 = $('.first5')
    let firstanswer5 = $('.answer5')
    searchicon.click(function(){
        searcharear.show(300)
    })
    crossicon.click(function(){
        searcharear.hide(300)
    })
    firstquestion1.click(function(){
        firstanswer1.slideToggle(300)
    })
    firstquestion2.click(function(){
        firstanswer2.slideToggle(300)
    })
    firstquestion3.click(function(){
        firstanswer3.slideToggle(300)
    })
    firstquestion4.click(function(){
        firstanswer4.slideToggle(300)
    })
    firstquestion5.click(function(){
        firstanswer5.slideToggle(300)
    })

})