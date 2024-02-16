import { TimeZones } from "./Timezones";

describe("TimeZones enum", () => {
  it("matches Intl.DateTimeFormat().resolvedOptions().timeZone", () => {
    const resolvedTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    const enumValues = Object.values(TimeZones);

    expect(enumValues).toContain(resolvedTimeZone);
  });
});
