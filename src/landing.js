import React from "react";

import { Steps, Typography } from "antd";

const { Step } = Steps;

export default function Landing({ onUpload }) {
  return (
    <main>
      <Typography.Title level={3}>How this works</Typography.Title>
      <Steps direction="vertical">
        <Step
          title="Get the CSV file"
          description={<div>PLACEHOLDER VIDEO</div>}
        />
        <Step
          status="current"
          title="Select the CSV file"
          description={
            <section>
              <p>
                Don't worry, this file does not get uploaded or leave your
                computer. This application is all client-side, there is no
                server computation or storage of your file, so it is
                confidential and safe.
              </p>
              <input type="file" onChange={onUpload} accept=".csv" />
            </section>
          }
        />
        <Step status="current" title="Prayerfully consider the output" />
      </Steps>
    </main>
  );
}
