import Grid from "@/registry/nextjs-reference/components/grid";
import Container from "@/registry/nextjs-reference/components/container";
import Section from "@/registry/nextjs-reference/components/section";
import Sticker from "@/registry/nextjs-reference/components/sticker";
import { LkColors } from "@repo/registry/universal/lib/utils/debugUtils";

export default function StickerStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Sticker Staging Area</h1>
          <Grid columns={4} gap="md" style={{ alignItems: "start", justifyItems: "start" }}>
            {LkColors.map((color) => (
              <Sticker key={color} bgColor={color}>
                {color}
              </Sticker>
            ))}
          </Grid>
        </Container>
      </Section>
    </>
  );
}
