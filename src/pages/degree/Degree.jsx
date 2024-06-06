import { DEGREE_CONFIG } from "./Degree.config";
import * as S from "./Degree.styles";

export function Degree() {
  return (
    <S.Wrapper>
      <S.Title>{DEGREE_CONFIG.TITLE}</S.Title>
      <S.Content>
        <S.Paragraph>
          <span>Objetivos:</span> {DEGREE_CONFIG.DATA.INSTITUTION}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Consciência ecológica e proteção dos recursos subaquáticos</span> {DEGREE_CONFIG.DATA.COURSE}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Compartilhar aprendizados com o mundo e usar a tecnologia para nos aproximar da natureza</span> {DEGREE_CONFIG.DATA.DURATION}
        </S.Paragraph>
        <S.Paragraph>
          <span>•Alcançar avanços na comunicação entre espécies transformando a compreensão e a conectividade humanas</span> {DEGREE_CONFIG.DATA.START}
        </S.Paragraph>
      </S.Content>
    </S.Wrapper>
  );
}
