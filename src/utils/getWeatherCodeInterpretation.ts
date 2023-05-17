/**
 * Returns a string interpretation of a given weather code.
 * @param weatherCode - The weather code to interpret.
 * @returns The interpretation of the weather code.
 * 
 * Weather codes:
 * 0 - Céu limpo
 * 1-3 - Poucas nuvens
 * 45, 48 - Névoa e nevoeiro
 * 51-57 - Chuvisco
 * 61-67 - Chuva
 * 71-77 - Neve e granizo
 * 80-82 - Pancadas de chuva
 * 85-86 - Neve
 * 95-99 - Trovoadas
 */

export function getWeatherCodeInterpretation(weatherCode: number) {
    const interpretations : Record<number, string>= {
        0: "Céu limpo",
        1: "Poucas nuvens",
        2: "Poucas nuvens",
        3: "Poucas nuvens",
        45: "Névoa e nevoeiro",
        48: "Névoa e nevoeiro",
        51: "Chuvisco",
        53: "Chuvisco",
        55: "Chuvisco",
        56: "Chuvisco congelante",
        57: "Chuvisco congelante",
        61: "Chuva",
        63: "Chuva",
        65: "Chuva",
        66: "Chuva congelante",
        67: "Chuva congelante",
        71: "Neve",
        73: "Neve",
        75: "Neve",
        77: "Granizo",
        80: "Pancadas de chuva",
        81: "Pancadas de chuva",
        82: "Pancadas de chuva",
        85: "Neve",
        86: "Neve",
        95: "Trovoadas",
        96: "Trovoadas com granizo",
        99: "Trovoadas com granizo"
    };

    return interpretations[weatherCode] || "";
}
