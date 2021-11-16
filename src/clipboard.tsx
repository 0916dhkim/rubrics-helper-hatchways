export async function copyToClipboard(text: string): Promise<void> {
  const { state } = await navigator.permissions.query({
    name: "clipboard-write" as PermissionName,
  });
  if (state !== "granted" && state !== "prompt") {
    // Insufficient permissions.
    console.warn("Failed to access clipboard.");
    return;
  }

  await navigator.clipboard.writeText(text);
}
