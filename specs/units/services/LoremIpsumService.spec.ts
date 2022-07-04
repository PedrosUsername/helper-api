import { LoremIpsumService } from "../../../src/services/LoremIpsumService"

describe('Executando teste na classe LoremIpsumService', () => {
  let _service: LoremIpsumService

  it ('Deveria intanciar corretamente a classe LoremIpsumService', () => {
    _service = new LoremIpsumService()
  })

  it ('Deveria retonar uma string com 4 palavras', () => {
    // Arrange
    const quantidade = 4

    // Act
    const lorenIpsumText = _service.generate(4)
    const result = lorenIpsumText.split(" ").length;

    // Assert
    expect(result).toBe(quantidade)
  })
})