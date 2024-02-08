import { describe } from "vitest";
import { render } from '@testing-library/react'

describe("Componente de rodape", () => {

    it('Deve exibir na tela o que foi recebido como propriedade', () => {
        render(<Rodape mensagem="oi amore, tudo bem?" />)

        screen.getByText("oi amore, tudo bem?")

        expect(mensagem).toBeInTheDocument();

    })

})