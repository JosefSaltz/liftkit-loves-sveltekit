"use client";
import Grid from "@/registry/nextjs-reference/components/grid";
import Container from "@/registry/nextjs-reference/components/container";
import Section from "@/registry/nextjs-reference/components/section";
import Sticker from "@/registry/nextjs-reference/components/sticker";
import { LkColors } from "@repo/registry/universal/lib/utils/debugUtils";
import Tabs from "@/registry/nextjs-reference/components/tabs";
import Column from "@/registry/nextjs-reference/components/column";
import Row from "@/registry/nextjs-reference/components/row";

export default function TabsStaging() {
  return (
    <>
      <Section padding="md">
        <Container>
          <h1 className="display2-bold mb-md">Tabs Staging Area</h1>
          <Tabs tabLinks={["tab1", "tab2", "tab3"]}>
            <Grid columns={4} gap="md" style={{ alignItems: "start", justifyItems: "start" }}>
              {LkColors.map((color) => (
                <Sticker key={color} bgColor={color}>
                  {color}
                </Sticker>
              ))}
            </Grid>
            <Column>
              {" "}
              {LkColors.map((color) => (
                <Sticker key={color} bgColor={color}>
                  {color}
                </Sticker>
              ))}
            </Column>
            <Row>
              {LkColors.map((color) => (
                <Sticker key={color} bgColor={color}>
                  {color}
                </Sticker>
              ))}
            </Row>
          </Tabs>
        </Container>
      </Section>
    </>
  );
}
