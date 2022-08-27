class FlightDatas {

    static flightList() {
        return [

            // id{
            //     ian:1,
            //     dubai:2,
            //     turkey:3
            //     france:4,
            //     paris:5,
            //     spania:6
            // }

            {
                id: 1,
                name:'iranToDubai',
                origin: 'Iran',
                destination: 'Dubai',
                originId: 1,
                destinationId: 2,
                price: 500,
                timeOnAirplane: '1 hour',
                hotelName: 'Spinas',
                description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum, error.',
                flightingMode: 'One-way'
            },
            {
                id: 2,
                name:'iranToTurkey',
                origin: 'Iran',
                destination: 'Turkey',
                originId: 1,
                destinationId: 3,
                price: 500,
                timeOnAirplane: '1:30 hour',
                hotelName: 'Abas Khan',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'Round'
            },
            {
                id: 3,
                name:'uaeToSpania',
                origin: 'UAE',
                destination: 'Spania',
                originId: 2,
                destinationId: 6,
                price: 1000,
                timeOnAirplane: '3 hour',
                hotelName: 'Neymar',
                description: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, quisquam impedit? Facere praesentium sed nobis.',
                flightingMode: 'One-way'
            },
            {
                id: 4,
                name:'turkeyToUAE',
                origin: 'Turkey',
                destination: 'UAE',
                price: 1000,
                timeOnAirplane: '30 min',
                originId: 3,
                destinationId: 2,
                hotelName: 'Emarate',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'One-way'
            },
            {
                id: 5,
                name:'iranToParis',
                origin: 'Iran',
                destination: 'Paris',
                originId: 1,
                destinationId: 5,
                price: 500,
                timeOnAirplane: '45 min',
                hotelName: 'Emarate',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'One-way'
            },
            {
                id: 6,
                name:'uaeToFrance',
                origin: 'UAE',
                destination: 'France',
                originId: 2,
                destinationId: 4,
                price: 3000,
                timeOnAirplane: '3 hour',
                hotelName: 'Nasional',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'Round'
            },
            {
                id: 7,
                name:'spaniaToParis',
                origin: 'Spania',
                destination: 'Paris',
                originId: 6,
                destinationId: 5,
                price: 900,
                timeOnAirplane: '5 hour',
                hotelName: 'Bonjoq',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'One-way'
            },
            {
                id: 8,
                name:'iranToFrance',
                origin: 'Iran',
                destination: 'France',
                originId: 1,
                destinationId: 4,
                price: 900,
                timeOnAirplane: '3 hour',
                hotelName: 'pegouet',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.consectetur adipisicing elit.',
                flightingMode: 'Round'
            },
            {
                id: 9,
                name:'turkeyToParis',
                origin: 'Turkey',
                destination: 'Paris',
                originId: 3,
                destinationId: 5,
                price: 1000,
                timeOnAirplane: '3 hour',
                hotelName: 'Bonjoq',
                description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
                flightingMode: 'Round'
            },
        ];
    }

    static getCountryNames() {
        return [
            { id: 1, value: 'Iran' },
            { id: 2, value: 'Dubai' },
            { id: 3, value: 'Turkey' },
            { id: 4, value: 'Paris' },
            { id: 5, value: 'Spania' }
        ]
    }

}

export default FlightDatas;