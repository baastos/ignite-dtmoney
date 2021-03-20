export function formatValue(value: number): string{
    return new Intl.NumberFormat('pt-BR', {
        currency: 'BRL',
        style: 'currency'
    }).format(value)
}