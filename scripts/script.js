document.addEventListener('DOMContentLoaded', () => {
   
    let controller = new ScrollMagic.Controller()

    let timeline = new TimelineMax()
    timeline 
    // .from('.section_1_01', 4, {
    //     y: -100,
    //     x: -150,
    //     ease: Power3.easeInOut
    // })
    // .from('.section_1_02', 4, {
    //     y: -150,
    //     x: -250,
    //     ease: Power3.easeInOut
    // }, '-=4') 
    // heb -=4 toegevoegd als offset waarde, 
    // dit zorgt ervoor dat deze animatie 4 seconde eerder begint 
    // dan de .from animatie die ervoor is gestopt
    .from('.section1_text', 4, {
        autoAlpha: 0
    })
    .to('.section_1_03', 4, {
        y: -60,
        x: 150,
        autoAlpha: 0,
        ease: Power3.easeInOut
    })
    .to('.section_1_04', 4, {
        x: 120,
        autoAlpha: 0,
        ease: Power3.easeInOut
    })
    .to('.section_1_05', 4, {
        x: 250,
        autoAlpha: 0,
        ease: Power3.easeInOut
    })
    .to('.section_1_06', 4, {
        x: 250,
        autoAlpha: 0,
        ease: Power3.easeInOut
    }, '-=4')
    .to('.section_1_07', 4, {
        autoAlpha: 1
    }, '-=4')


    
   

    let Scene = new ScrollMagic.Scene({
        triggerElement: '.first-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '300' // de animatie start als de eerste sectie 300px van de top van het scherm af zit
    })
    .setTween(timeline) // voeg de timeline variabele toe als 
    .setPin('.first-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)


    // section 2

    let timeline2 = new TimelineMax()
    timeline2 
    .from('.section2_text', 4, {
        autoAlpha: 0
    })
    .to('.section_2_01', 4, {
        autoAlpha: 1
    })
    .to('.section_2_02', 4, {
        autoAlpha: 1
    })
    .to('.section_2_03', 4, {
        autoAlpha: 1
    })
    .to('.section_2_04', 4, {
        autoAlpha: 1
    })
    .to('.section_2_05', 4, {
        autoAlpha: 1
    })
    .to('.section_2_06', 4, {
        autoAlpha: 1
    })
   

    let Scene2 = new ScrollMagic.Scene({
        triggerElement: '.second-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
    })
    .setTween(timeline2) // voeg de timeline variabele toe als 
    .setPin('.second-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)

    // Section 3

       let timeline3 = new TimelineMax()
       timeline3
       .from('.section3_text', 4, {
        autoAlpha: 0
    })
    .from('.section_3_01', 4, {
        autoAlpha: 0
    })
    .from('.section_3_02', 4, {
        autoAlpha: 0
    })
    .from('.section_3_03', 4, {
        autoAlpha: 0
    })
    .from('.section_3_04', 4, {
        autoAlpha: 0
    })
    .from('.section_3_05', 4, {
        autoAlpha: 0
    })
    .from('.section_3_06', 4, {
        autoAlpha: 0
    })
    .from('.section_3_07', 4, {
        autoAlpha: 0
    })
    .from('.section_3_08', 4, {
        autoAlpha: 0
    })
           
    
   
       let Scene3 = new ScrollMagic.Scene({
           triggerElement: '.third-section',
           duration: '100%',
           triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
           offset: '0' // de animatie start als de eerste sectie 200px van de top van het scherm af zit
       })
       .setTween(timeline3) // voeg de timeline variabele toe als 
       .setPin('.third-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
       .addTo(controller)

       // section 4

    let timeline4 = new TimelineMax()
    timeline4
    .to('.section_4_bg_1', 4, {
        autoAlpha: 0
    })
    .from('.section_4_bg_2', 4, {
        autoAlpha: 0
    })
    .from('.section4_text', 4, {
        autoAlpha: 0
    }, '-=4')
    .from('.section_4_bg_3', 4, {
        autoAlpha: 0
    })
   

    let Scene4 = new ScrollMagic.Scene({
        triggerElement: '.forth-section',
        duration: '100%',
        triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
        offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
    })
    .setTween(timeline4) // voeg de timeline variabele toe als 
    .setPin('.forth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
    .addTo(controller)


 // section 5

 let timeline5 = new TimelineMax()
 timeline5
 .from('.section5_text', 4, {
    autoAlpha: 0
})
.to('.section_5_02', 4, {
    y: 270,
    x: -150,
    ease: Power3.easeInOut
})
.to('.section_5_03', 4, {
    y: 270,
    x: -190,
    ease: Power3.easeInOut
})
.to('.section_5_04', 4, {
    y: 280,
    x: -220,
    ease: Power3.easeInOut
})
.to('.section_5_05', 4, {
    y: 290,
    x: -180,
    ease: Power3.easeInOut
})
.to('.section_5_06', 4, {
    y: 240,
    x: -280,
    ease: Power3.easeInOut
})
.to('.section_5_07', 4, {
    y: 230,
    x: -320,
    ease: Power3.easeInOut   
})
.to('.section_5_08', 4, {
    y: 245,
    x: -350,
    ease: Power3.easeInOut   
})


 let Scene5 = new ScrollMagic.Scene({
     triggerElement: '.fifth-section',
     duration: '100%',
     triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
     offset: '0' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
 })
 .setTween(timeline5) // voeg de timeline variabele toe als 
 .setPin('.fifth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
 .addTo(controller)

        // section 6

        let timeline6 = new TimelineMax()
        timeline6
        .from('.section6_text', 4, {
            autoAlpha: 0
        })
        .to('.section_6_bg', 4, {
            autoAlpha: 0
        })
        .to('.section6_text', 4, {
            autoAlpha: 0
        })
        .from('.section_6_bg_2', 4, {
            autoAlpha: 0
        })
            
        let Scene6 = new ScrollMagic.Scene({
            triggerElement: '.sixth-section',
            duration: '100%',
            triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
            offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
        })
        .setTween(timeline6) // voeg de timeline variabele toe als 
        .setPin('.sixth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
        .addTo(controller)

          // section 7

          let timeline7 = new TimelineMax()
          timeline7
          .from('.section7_text', 4, {
              autoAlpha: 0
          })

          let Scene7 = new ScrollMagic.Scene({
              triggerElement: '.seventh-section',
              duration: '100%',
              triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
              offset: '0' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
          })
          .setTween(timeline7) // voeg de timeline variabele toe als 
          .setPin('.seventh-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
          .addTo(controller)

            // section 8

            let timeline8 = new TimelineMax()
            timeline8
            .from('.section8_text', 4, {
                autoAlpha: 0
            })
            .from('.section_8_04', 4, {
                autoAlpha: 0
            })
            .from('.section_8_05', 4, {
                autoAlpha: 0
            })
            .from('.section_8_06', 4, {
                autoAlpha: 0
            })
            .from('.section_8_07', 4, {
                autoAlpha: 0
            })
            
            
            let Scene8 = new ScrollMagic.Scene({
                triggerElement: '.eight-section',
                duration: '100%',
                triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
                offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
            })
            .setTween(timeline8) // voeg de timeline variabele toe als 
            .setPin('.eight-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
            .addTo(controller)

            // section 9

            let timeline9 = new TimelineMax()
            timeline9
            .from('.section9_text', 4, {
                autoAlpha: 0
            })
            .to('.section_9_bg', 4, {
                filter: "blur(4px)"
            })    
            
            let Scene9 = new ScrollMagic.Scene({
                triggerElement: '.nineth-section',
                duration: '100%',
                triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
                offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
            })
            .setTween(timeline9) // voeg de timeline variabele toe als 
            .setPin('.nineth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
            .addTo(controller)

            // section 10

            let timeline10 = new TimelineMax()
            timeline10
            .from('.section10_text', 4, {
                autoAlpha: 0
            })
            .from('.section_10_01', 4, {
                autoAlpha: 0
            })
            .from('.section_10_02', 4, {
                autoAlpha: 0
            })
            
            
            let Scene10 = new ScrollMagic.Scene({
                triggerElement: '.tenth-section',
                duration: '100%',
                triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
                offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
            })
            .setTween(timeline10) // voeg de timeline variabele toe als 
            .setPin('.tenth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
            .addTo(controller)

             // section 11

             let timeline11 = new TimelineMax()
             timeline11
             .from('.section11_text', 4, {
                 autoAlpha: 0
             })
             .from('.section_11_01', 4, {
                 autoAlpha: 0
             })             
             
             let Scene11 = new ScrollMagic.Scene({
                 triggerElement: '.eleventh-section',
                 duration: '100%',
                 triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
                 offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
             })
             .setTween(timeline11) // voeg de timeline variabele toe als 
             .setPin('.eleventh-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
             .addTo(controller)

                // section 12

                let timeline12 = new TimelineMax()
                timeline12
                .from('.section12_text', 4, {
                    autoAlpha: 0
                })
                .to('.section_12_08', 4, {
                    autoAlpha: 0
                })      
                .to('.section_12_09', 4, {
                    autoAlpha: 0
                })  
                .to('.section_12_10', 4, {
                    autoAlpha: 0
                })  
                .to('.section_12_11', 4, {
                    autoAlpha: 0
                }) 
                .to('.section_12_12', 4, {
                    autoAlpha: 0
                })  
                .to('.section_12_06', 4, {
                    autoAlpha: 0
                }) 
                       
                
                let Scene12 = new ScrollMagic.Scene({
                    triggerElement: '.twelveth-section',
                    duration: '100%',
                    triggerHook: 0, // als de eerste sectie de bovenkant raakt van het scherm begin dan met animeren
                    offset: '100' // de animatie start als de eerste sectie 100px van de top van het scherm af zit
                })
                .setTween(timeline12) // voeg de timeline variabele toe als 
                .setPin('.twelveth-section') // ga niet voorbij de eerste sectie voordat de animatie is geweest
                .addTo(controller)

})