import { getWeatherCodeInterpretation }  from '../getWeatherCodeInterpretation';

describe('getWeatherCodeInterpretation', () => {
    test('returns correct interpretation for each weather code', () => {
        const interpretations = {
            0: 'Céu limpo',
            1: 'Poucas nuvens',
            2: 'Poucas nuvens',
            3: 'Poucas nuvens',
            45: 'Névoa e nevoeiro',
            48: 'Névoa e nevoeiro',
            51: 'Chuvisco',
            53: 'Chuvisco',
            55: 'Chuvisco',
            56: 'Chuvisco congelante',
            57: 'Chuvisco congelante',
            61: 'Chuva',
            63: 'Chuva',
            65: 'Chuva',
            66: 'Chuva congelante',
            67: 'Chuva congelante',
            71: 'Neve',
            73: 'Neve',
            75: 'Neve',
            77: 'Granizo',
            80: 'Pancadas de chuva',
            81: 'Pancadas de chuva',
            82: 'Pancadas de chuva',
            85: 'Neve',
            86: 'Neve',
            95: 'Trovoadas',
            96: 'Trovoadas com granizo',
            99: 'Trovoadas com granizo',
        };

        for (const weatherCode in interpretations) {
            const expectedInterpretation = interpretations[weatherCode];
            const actualInterpretation = getWeatherCodeInterpretation(Number(weatherCode));
            expect(actualInterpretation).toBe(expectedInterpretation);
        }
    });
});
