import { ConnectErrorDetailCodes } from "../../../src/gateway/protocol/connect-error-details.js";
import { t } from "../i18n/index.ts";
import { resolveGatewayErrorDetailCode } from "./gateway.ts";
import { normalizeLowercaseStringOrEmpty } from "./string-coerce.ts";

type ErrorWithMessageAndDetails = {
  message?: unknown;
  details?: unknown;
};

function normalizeErrorMessage(message: unknown): string {
  if (typeof message === "string") {
    return message;
  }
  if (message instanceof Error && typeof message.message === "string") {
    return message.message;
  }
  return t("ui.connectError.unknown");
}

function formatErrorFromMessageAndDetails(error: ErrorWithMessageAndDetails): string {
  const message = normalizeErrorMessage(error.message);
  const detailCode = resolveGatewayErrorDetailCode(error);

  switch (detailCode) {
    case ConnectErrorDetailCodes.AUTH_TOKEN_MISMATCH:
      return t("ui.connectError.tokenMismatch");
    case ConnectErrorDetailCodes.AUTH_UNAUTHORIZED:
      return t("ui.connectError.authFailed");
    case ConnectErrorDetailCodes.AUTH_RATE_LIMITED:
      return t("ui.connectError.rateLimited");
    case ConnectErrorDetailCodes.PAIRING_REQUIRED:
      return t("ui.connectError.pairingRequired");
    case ConnectErrorDetailCodes.CONTROL_UI_DEVICE_IDENTITY_REQUIRED:
      return t("ui.connectError.deviceIdentityRequired");
    case ConnectErrorDetailCodes.CONTROL_UI_ORIGIN_NOT_ALLOWED:
      return t("ui.connectError.originNotAllowed");
    case ConnectErrorDetailCodes.AUTH_TOKEN_MISSING:
      return t("ui.connectError.tokenMissing");
    default:
      break;
  }

  const normalized = normalizeLowercaseStringOrEmpty(message);
  if (
    normalized === "fetch failed" ||
    normalized === "failed to fetch" ||
    normalized === "connect failed"
  ) {
    return t("ui.connectError.connectFailed");
  }
  return message;
}

export function formatConnectError(error: unknown): string {
  if (error && typeof error === "object") {
    return formatErrorFromMessageAndDetails(error as ErrorWithMessageAndDetails);
  }
  return normalizeErrorMessage(error);
}
