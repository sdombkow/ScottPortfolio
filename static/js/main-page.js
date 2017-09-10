/*var minimizeSchoolHeader = anime({
    targets: '.school-container #school-header',
    scale: .7,
    translateX: -250,
    duration: 3000,
    delay: 3000,
    line_height: ['120px','96px'],
    autoplay: false
});

var minimizeSchoolListing = anime({
    targets: '.school-container .project-info',
    scale: .7,
    translateX: -250,
    duration: 3000,
    delay: 3000,
    height: ['11rem','8rem'],
    translateY: -75,
    autoplay: false
});
*/

function thisisit() {
    $('.hovered-element-one').on('mouseover', function(){
        $('.hovered-element-one')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-one')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-one')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-one')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-two').on('mouseover', function(){
        $('.hovered-element-two')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-two')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-two')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-two')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-three').on('mouseover', function(){
        $('.hovered-element-three')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-three')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-three')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-three')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-four').on('mouseover', function(){
        $('.hovered-element-four')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-four')[0].children[0].children[2].classList.add('is-hovered-two');
        $('.hovered-element-four')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-four')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-four')[0].children[0].children[2].classList.remove('is-hovered-two');
        $('.hovered-element-four')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-five').on('mouseover', function(){
        $('.hovered-element-five')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-five')[0].children[0].children[3].classList.add('is-hovered-two');
        $('.hovered-element-five')[0].children[0].children[2].classList.add('is-hovered-three');
        $('.hovered-element-five')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-five')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-five')[0].children[0].children[3].classList.remove('is-hovered-two');
        $('.hovered-element-five')[0].children[0].children[2].classList.remove('is-hovered-three');
        $('.hovered-element-five')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-six').on('mouseover', function(){
        $('.hovered-element-six')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-six')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-six')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-six')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-seven').on('mouseover', function(){
        $('.hovered-element-seven')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-seven')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-seven')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-seven')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-eight').on('mouseover', function(){
        $('.hovered-element-eight')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-eight')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-eight')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-eight')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-nine').on('mouseover', function(){
        $('.hovered-element-nine')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-nine')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-nine')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-nine')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-ten').on('mouseover', function(){
        $('.hovered-element-ten')[0].children[0].children[2].classList.add('is-hovered-one');
        $('.hovered-element-ten')[0].children[0].children[3].classList.add('is-hovered-two');
        $('.hovered-element-ten')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-ten')[0].children[0].children[2].classList.remove('is-hovered-one');
        $('.hovered-element-ten')[0].children[0].children[3].classList.remove('is-hovered-two');
        $('.hovered-element-ten')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-eleven').on('mouseover', function(){
        $('.hovered-element-eleven')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-eleven')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-eleven')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-eleven')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-twelve').on('mouseover', function(){
        $('.hovered-element-twelve')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-twelve')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-twelve')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-twelve')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-thirteen').on('mouseover', function(){
        $('.hovered-element-thirteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-thirteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-thirteen')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-thirteen')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-fourteen').on('mouseover', function(){
        $('.hovered-element-fourteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-fourteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-fourteen')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-fourteen')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-fifteen').on('mouseover', function(){
        $('.hovered-element-fifteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-fifteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-fifteen')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-fifteen')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-sixteen').on('mouseover', function(){
        $('.hovered-element-sixteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-sixteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-sixteen')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-sixteen')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-seventeen').on('mouseover', function(){
        $('.hovered-element-seventeen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-seventeen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-seventeen')[0].children[0].children[1].classList.remove('is-hovered-one');
        $('.hovered-element-seventeen')[1].children[0].classList.remove('hovered-image');
    })
    $('.hovered-element-eightteen').on('mouseover', function(){
        $('.hovered-element-eightteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-eightteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-eightteen')[0].children[0].children[1].classList.remove('is-hovered-one');
		console.log("In Here");
        $('.hovered-element-eightteen')[1].children[0].classList.remove('hovered-image');
    })
	$('.hovered-element-nineteen').on('mouseover', function(){
        $('.hovered-element-nineteen')[0].children[0].children[1].classList.add('is-hovered-one');
        $('.hovered-element-nineteen')[1].children[0].classList.add('hovered-image');
    }).on('mouseout', function(){
        $('.hovered-element-nineteen')[0].children[0].children[1].classList.remove('is-hovered-one');
		console.log("In Here");
        $('.hovered-element-nineteen')[1].children[0].classList.remove('hovered-image');
    })
};