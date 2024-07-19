import * as pulumi from "@pulumi/pulumi";
import * as vultr from "@ediri/vultr";

const main = async () => {
  const myInstance = new vultr.Instance("pulumi-test", {
    osId: 2284,
    plan: "vc2-1c-1gb",
    region: "lax",
  });
};

main();
