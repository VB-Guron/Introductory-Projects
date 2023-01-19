var weatherSchema = {
    "$schema": "https://json-schema.org/draft/2019-09/schema",
    "$id": "http://explorecalifornia.com/schemas/weather.json",
    "title": "Root Schema",
    "type": "object",
    "default": {},
    "required": [
        "id",
        "name",
        "name_ascii",
        "lat",
        "lng",
        "population",
        "country_id",
        "province",
        "country_name",
        "unit",
        "season",
        "forecast"
    ],
    "properties": {
        "id": {
            "title": "The id Schema",
            "type": "string",
            "default": "",
            "examples": [
                "3033"
            ]
        },
        "name": {
            "title": "The name Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Pondicherry"
            ]
        },
        "name_ascii": {
            "title": "The name_ascii Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Pondicherry"
            ]
        },
        "lat": {
            "title": "The lat Schema",
            "type": "string",
            "default": "",
            "examples": [
                "11.93499371"
            ]
        },
        "lng": {
            "title": "The lng Schema",
            "type": "string",
            "default": "",
            "examples": [
                "79.83000037"
            ]
        },
        "population": {
            "title": "The population Schema",
            "type": "string",
            "default": "",
            "examples": [
                "227411"
            ]
        },
        "country_id": {
            "title": "The country_id Schema",
            "type": "string",
            "default": "",
            "examples": [
                "88"
            ]
        },
        "province": {
            "title": "The province Schema",
            "type": "string",
            "default": "",
            "examples": [
                "Puducherry"
            ]
        },
        "country_name": {
            "title": "The country_name Schema",
            "type": "string",
            "default": "",
            "examples": [
                "India"
            ]
        },
        "unit": {
            "title": "The unit Schema",
            "type": "string",
            "default": "",
            "examples": [
                "F"
            ]
        },
        "season": {
            "title": "The season Schema",
            "type": "string",
            "default": "",
            "examples": [
                "spring"
            ]
        },
        "forecast": {
            "title": "The forecast Schema",
            "type": "array",
            "default": [],
            "items": {
                "title": "A Schema",
                "type": "object",
                "required": [
                    "date",
                    "temp_min",
                    "temp_max",
                    "season_min",
                    "season_max",
                    "condition_name",
                    "condition_desc",
                    "condition_video",
                    "condition_icon"
                ],
                "properties": {
                    "date": {
                        "title": "The date Schema",
                        "type": "string",
                        "examples": [
                            "06/06/2021",
                            "06/07/2021",
                            "06/08/2021",
                            "06/09/2021",
                            "06/10/2021",
                            "06/11/2021",
                            "06/12/2021",
                            "06/13/2021",
                            "06/14/2021",
                            "06/15/2021",
                            "06/16/2021"
                        ]
                    },
                    "temp_min": {
                        "title": "The temp_min Schema",
                        "type": "number",
                        "examples": [
                            84.919999999999987494447850622236728668212890625,
                            84.7039999999999935198502498678863048553466796875,
                            84.7399999999999948840923025272786617279052734375,
                            84.8119999999999976125764078460633754730224609375,
                            84.7579999999999955662133288569748401641845703125,
                            85.424000000000006593836587853729724884033203125,
                            84.650000000000005684341886080801486968994140625
                        ]
                    },
                    "temp_max": {
                        "title": "The temp_max Schema",
                        "type": [
                            "number",
                            "integer"
                        ],
                        "examples": [
                            85.063999999999992951416061259806156158447265625,
                            85.96399999999999863575794734060764312744140625,
                            84.830000000000012505552149377763271331787109375,
                            86.198000000000007503331289626657962799072265625,
                            86.539999999999992041921359486877918243408203125,
                            85.657999999999987039700499735772609710693359375,
                            84.7759999999999962483343551866710186004638671875,
                            85.099999999999994315658113919198513031005859375,
                            86,
                            84.8840000000000003410605131648480892181396484375,
                            84.7039999999999935198502498678863048553466796875
                        ]
                    },
                    "season_min": {
                        "title": "The season_min Schema",
                        "type": "number",
                        "examples": [
                            84.650000000000005684341886080801486968994140625
                        ]
                    },
                    "season_max": {
                        "title": "The season_max Schema",
                        "type": "number",
                        "examples": [
                            87.349999999999994315658113919198513031005859375
                        ]
                    },
                    "condition_name": {
                        "title": "The condition_name Schema",
                        "type": "string",
                        "examples": [
                            "rain",
                            "sun",
                            "cloudy",
                            "storm"
                        ]
                    },
                    "condition_desc": {
                        "title": "The condition_desc Schema",
                        "type": "string",
                        "examples": [
                            "Wet and rainy",
                            "Blue skies all day long!",
                            "Partially cloudy day",
                            "Watch out for storms!"
                        ]
                    },
                    "condition_video": {
                        "title": "The condition_video Schema",
                        "type": "string",
                        "examples": [
                            "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                            "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                            "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                            "http://explorecalifornia.org/api/media/storm_190935.mp4"
                        ]
                    },
                    "condition_icon": {
                        "title": "The condition_icon Schema",
                        "type": "string",
                        "examples": [
                            "http://explorecalifornia.org/api/media/rain_16240.png",
                            "http://explorecalifornia.org/api/media/sun_16240.png",
                            "http://explorecalifornia.org/api/media/cloudy_16240.png",
                            "http://explorecalifornia.org/api/media/storm_16240.png"
                        ]
                    }
                },
                "examples": [{
                    "date": "06/06/2021",
                    "temp_min": 84.919999999999987494447850622236728668212890625,
                    "temp_max": 85.063999999999992951416061259806156158447265625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/07/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 85.96399999999999863575794734060764312744140625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "sun",
                    "condition_desc": "Blue skies all day long!",
                    "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                },
                {
                    "date": "06/08/2021",
                    "temp_min": 84.7399999999999948840923025272786617279052734375,
                    "temp_max": 84.830000000000012505552149377763271331787109375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/09/2021",
                    "temp_min": 84.8119999999999976125764078460633754730224609375,
                    "temp_max": 86.198000000000007503331289626657962799072265625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/10/2021",
                    "temp_min": 84.7579999999999955662133288569748401641845703125,
                    "temp_max": 86.539999999999992041921359486877918243408203125,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/11/2021",
                    "temp_min": 85.424000000000006593836587853729724884033203125,
                    "temp_max": 85.657999999999987039700499735772609710693359375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "storm",
                    "condition_desc": "Watch out for storms!",
                    "condition_video": "http://explorecalifornia.org/api/media/storm_190935.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/storm_16240.png"
                },
                {
                    "date": "06/12/2021",
                    "temp_min": 84.650000000000005684341886080801486968994140625,
                    "temp_max": 84.7759999999999962483343551866710186004638671875,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/13/2021",
                    "temp_min": 84.650000000000005684341886080801486968994140625,
                    "temp_max": 85.099999999999994315658113919198513031005859375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/14/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 86,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/15/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 84.8840000000000003410605131648480892181396484375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/16/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 84.7039999999999935198502498678863048553466796875,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "sun",
                    "condition_desc": "Blue skies all day long!",
                    "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                }]
            },
            "examples": [
                [{
                    "date": "06/06/2021",
                    "temp_min": 84.919999999999987494447850622236728668212890625,
                    "temp_max": 85.063999999999992951416061259806156158447265625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/07/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 85.96399999999999863575794734060764312744140625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "sun",
                    "condition_desc": "Blue skies all day long!",
                    "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                },
                {
                    "date": "06/08/2021",
                    "temp_min": 84.7399999999999948840923025272786617279052734375,
                    "temp_max": 84.830000000000012505552149377763271331787109375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/09/2021",
                    "temp_min": 84.8119999999999976125764078460633754730224609375,
                    "temp_max": 86.198000000000007503331289626657962799072265625,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/10/2021",
                    "temp_min": 84.7579999999999955662133288569748401641845703125,
                    "temp_max": 86.539999999999992041921359486877918243408203125,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/11/2021",
                    "temp_min": 85.424000000000006593836587853729724884033203125,
                    "temp_max": 85.657999999999987039700499735772609710693359375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "storm",
                    "condition_desc": "Watch out for storms!",
                    "condition_video": "http://explorecalifornia.org/api/media/storm_190935.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/storm_16240.png"
                },
                {
                    "date": "06/12/2021",
                    "temp_min": 84.650000000000005684341886080801486968994140625,
                    "temp_max": 84.7759999999999962483343551866710186004638671875,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "cloudy",
                    "condition_desc": "Partially cloudy day",
                    "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
                },
                {
                    "date": "06/13/2021",
                    "temp_min": 84.650000000000005684341886080801486968994140625,
                    "temp_max": 85.099999999999994315658113919198513031005859375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/14/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 86,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/15/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 84.8840000000000003410605131648480892181396484375,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "rain",
                    "condition_desc": "Wet and rainy",
                    "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
                },
                {
                    "date": "06/16/2021",
                    "temp_min": 84.7039999999999935198502498678863048553466796875,
                    "temp_max": 84.7039999999999935198502498678863048553466796875,
                    "season_min": 84.650000000000005684341886080801486968994140625,
                    "season_max": 87.349999999999994315658113919198513031005859375,
                    "condition_name": "sun",
                    "condition_desc": "Blue skies all day long!",
                    "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
                    "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
                }]
            ]
        }
    },
    "examples": [{
        "id": "3033",
        "name": "Pondicherry",
        "name_ascii": "Pondicherry",
        "lat": "11.93499371",
        "lng": "79.83000037",
        "population": "227411",
        "country_id": "88",
        "province": "Puducherry",
        "country_name": "India",
        "unit": "F",
        "season": "spring",
        "forecast": [{
            "date": "06/06/2021",
            "temp_min": 84.919999999999987494447850622236728668212890625,
            "temp_max": 85.063999999999992951416061259806156158447265625,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "rain",
            "condition_desc": "Wet and rainy",
            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
        },
        {
            "date": "06/07/2021",
            "temp_min": 84.7039999999999935198502498678863048553466796875,
            "temp_max": 85.96399999999999863575794734060764312744140625,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "sun",
            "condition_desc": "Blue skies all day long!",
            "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
        },
        {
            "date": "06/08/2021",
            "temp_min": 84.7399999999999948840923025272786617279052734375,
            "temp_max": 84.830000000000012505552149377763271331787109375,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "cloudy",
            "condition_desc": "Partially cloudy day",
            "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
        },
        {
            "date": "06/09/2021",
            "temp_min": 84.8119999999999976125764078460633754730224609375,
            "temp_max": 86.198000000000007503331289626657962799072265625,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "rain",
            "condition_desc": "Wet and rainy",
            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
        },
        {
            "date": "06/10/2021",
            "temp_min": 84.7579999999999955662133288569748401641845703125,
            "temp_max": 86.539999999999992041921359486877918243408203125,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "cloudy",
            "condition_desc": "Partially cloudy day",
            "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
        },
        {
            "date": "06/11/2021",
            "temp_min": 85.424000000000006593836587853729724884033203125,
            "temp_max": 85.657999999999987039700499735772609710693359375,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "storm",
            "condition_desc": "Watch out for storms!",
            "condition_video": "http://explorecalifornia.org/api/media/storm_190935.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/storm_16240.png"
        },
        {
            "date": "06/12/2021",
            "temp_min": 84.650000000000005684341886080801486968994140625,
            "temp_max": 84.7759999999999962483343551866710186004638671875,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "cloudy",
            "condition_desc": "Partially cloudy day",
            "condition_video": "http://explorecalifornia.org/api/media/cloudy_45449.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/cloudy_16240.png"
        },
        {
            "date": "06/13/2021",
            "temp_min": 84.650000000000005684341886080801486968994140625,
            "temp_max": 85.099999999999994315658113919198513031005859375,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "rain",
            "condition_desc": "Wet and rainy",
            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
        },
        {
            "date": "06/14/2021",
            "temp_min": 84.7039999999999935198502498678863048553466796875,
            "temp_max": 86,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "rain",
            "condition_desc": "Wet and rainy",
            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
        },
        {
            "date": "06/15/2021",
            "temp_min": 84.7039999999999935198502498678863048553466796875,
            "temp_max": 84.8840000000000003410605131648480892181396484375,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "rain",
            "condition_desc": "Wet and rainy",
            "condition_video": "http://explorecalifornia.org/api/media/rain_28580841.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/rain_16240.png"
        },
        {
            "date": "06/16/2021",
            "temp_min": 84.7039999999999935198502498678863048553466796875,
            "temp_max": 84.7039999999999935198502498678863048553466796875,
            "season_min": 84.650000000000005684341886080801486968994140625,
            "season_max": 87.349999999999994315658113919198513031005859375,
            "condition_name": "sun",
            "condition_desc": "Blue skies all day long!",
            "condition_video": "http://explorecalifornia.org/api/media/sun_4623792.mp4",
            "condition_icon": "http://explorecalifornia.org/api/media/sun_16240.png"
        }]
    }]
}