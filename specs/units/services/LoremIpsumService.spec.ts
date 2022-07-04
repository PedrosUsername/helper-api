import { LoremIpsumService } from "../../../src/services/LoremIpsumService"

describe('Executando teste na classe LoremIpsumService', () => {
  let _service: LoremIpsumService

  it ('Deveria intanciar corretamente a classe LoremIpsumService', () => {
    _service = new LoremIpsumService()
  })



  
  it ('Deveria retonar uma string com 5 palavras', () => {
    // Arrange
    const quantidade = 5

    // Act
    const lorenIpsumText = _service.generate(5)
    const result = lorenIpsumText.split(" ").length;

    // Assert
    expect(result).toBe(quantidade)
  })




  it ('Deveria retonar uma string com 69 palavras', () => {
    // Arrange
    const quantidade = 69

    // Act
    const lorenIpsumText = _service.generate(69)
    const result = lorenIpsumText.split(" ").length;

    // Assert
    expect(result).toBe(quantidade)
  })




  it ('Deveria retonar uma string com 75 palavras', () => {
    // Arrange
    const quantidade = 75

    // Act
    const lorenIpsumText = _service.generate(75)
    const result = lorenIpsumText.split(" ").length;

    // Assert
    expect(result).toBe(quantidade)
  })    
})