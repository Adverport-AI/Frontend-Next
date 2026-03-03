import { createClient, type SanityClient } from "@sanity/client";
import { apiVersion, dataset, projectId } from "../env";

function makeClient(useCdn: boolean, token?: string): SanityClient | null {
  if (!projectId) return null;
  return createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn,
    ...(token ? { token } : {}),
  });
}

export const client: SanityClient | null = makeClient(true);
export const serverClient: SanityClient | null = makeClient(false, process.env.SANITY_API_TOKEN);
