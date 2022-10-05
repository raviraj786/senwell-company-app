import { View, Text, StyleSheet, FlatList } from 'react-native'
import React from 'react'

export default function Testimonal() {
    const data = [
        {
            Title1: 'They are incredibly client-focused so we saw them as partners',
            Title2: ' rather than service suppliers. Applying industry cutting edge- ',
            Title3: ' practices and knowledge of travel, real estate, technology,',
            Title4: ' and software business domain they have managed to deliver the  ',
            Title5: 'project on time and of the highest quality.',
            details: 'Name: Derick, Hatchster Ltd. UK'
        },
        {
            Title1: 'I’ve been working with Senwell Solutions for several outsourcing ',
            Title2: 'projects for clients in Canada and US, and I have to say that the',
            Title3: ' guys here deliver really great work and oftentimes outperform the ',
            Title4: ' clients’ own development teams. I’ve never met such productivity',
            Title5: 'before and that’s probably one of the biggest, although not the',
            Title6: 'only one advantage of the company',
            details: 'Name: Kevin Atom, Property Hatch Ltd, United State'
        },
        {
            Title1: 'We are enormously satisfied with Senwell Solutions as contractor',
            Title2: 'Highly responsive team with profound understanding of subject matter and',
            Title3: 'really very, very fast code delivery that is particularly important for',
            Title4: 'our travel business.',
            details: 'Name: Nicolo F, Italy.'
        },

    ]

    return (
        <View>
            <FlatList
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled
                data={data}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.box5}>
                            <Text style={styles.Title3}>"{item.Title1}"</Text>
                            <Text style={styles.Title3}>"{item.Title2}"</Text>
                            <Text style={styles.Title3}>"{item.Title3}"</Text>
                            <Text style={styles.Title3}>"{item.Title4}"</Text>
                            <Text style={styles.Title3}>"{item.Title5}"</Text>
                            <Text style={{ fontWeight: '700' }}>{item.details}</Text>

                        </View>
                    )
                }}
            />
        </View>
    )


}

const styles = StyleSheet.create({
    box5: {
        borderWidth: 1,
        backgroundColor: '#ffff',
        borderColor: '#D0D3D4',
        margin: 10,
        display: 'flex',
        padding: 10
    },
    Title3: {

        fontStyle: 'italic',
        alignContent: 'flex-start'
    }
})