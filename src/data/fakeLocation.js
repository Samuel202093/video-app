const FAKE_LOCATIONS = [
    {
        coords:{
            latitude: 0.76126,
            longitude: 31.33584
        }
    },
    {
        coords:{
            latitude: -27.6068,
            longitude: 14.55563
        }
    },
    {
        coords:{
            latitude: -33.87379,
            longitude: 158.13075
        }
    },
    {
        coords:{
            latitude: 39.84008,
            longitude: 31.73172
        }
    },
    {
        coords:{
            latitude: 46.97462,
            longitude: 22.39456
        }
    },
    {
        coords:{
            latitude: 10.62231,
            longitude: 11.17861
        }
    },
    {
        coords:{
            latitude: 80.76853,
            longitude: -1.97983
        }
    },
    {
        coords:{
            latitude: -121.89403,
            longitude: 37.979835
        }
    }
]


export const getFakeLocation = ()=>{
    return FAKE_LOCATIONS[Math.floor(Math.random() * FAKE_LOCATIONS.length)]
}