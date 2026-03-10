const settings = {
  VHOST: import.meta.env.VITE_RABBITMQ_VHOST,
  USER: import.meta.env.VITE_RABBITMQ_USER,
  PASS: import.meta.env.VITE_RABBITMQ_PASS,
  EXCHANGE: import.meta.env.VITE_RABBITMQ_EXCHANGE,
  ROUTING_KEY: import.meta.env.VITE_RABBITMQ_ROUTING_KEY,
};

class PortfolioProducer {
  private authHeader: string;

  constructor() {
    this.authHeader = "Basic " + btoa(`${settings.USER}:${settings.PASS}`);
  }

  async publishMessage(
    messageType: string,
    data: Record<string, unknown>,
  ): Promise<void> {
    const response = await fetch(
      `/rabbitmq-api/exchanges/${encodeURIComponent(settings.VHOST)}/${encodeURIComponent(settings.EXCHANGE)}/publish`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: this.authHeader,
        },
        body: JSON.stringify({
          properties: { delivery_mode: 2, content_type: "application/json" },
          routing_key: settings.ROUTING_KEY,
          payload: JSON.stringify({ type: messageType, data }),
          payload_encoding: "string",
        }),
      },
    );

    if (!response.ok) {
      throw new Error("Erro ao enviar mensagem. Tente novamente.");
    }

    const result = await response.json();
    if (!result.routed) {
      throw new Error("Mensagem não foi roteada para a fila.");
    }
  }
}

export const producer = new PortfolioProducer();
