import { View, Text } from 'react-native'

import React, { useRef, useState } from 'react';
import gsap from 'gsap';

export default function TextStyle() {
    const [text, setText] = useState('wow');
    const element = useRef(null);

    const onMouseOverHandler = () => {

        const tl = new gsap.timeline();

        tl.to(element.current, {
            duration: 0.1,
            call: () => {
                setText('G');
            }
        })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gu');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gus');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gust');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gusta');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gusta');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gustav');
                }
            })
            .to(element.current, {
                duration: 0.1,
                call: () => {
                    setText('Gustavo');
                }
            });
    };
  return (
    <View  ref={element} onMouseOver={onMouseOverHandler}>
       {text}
    </View>
  )
}