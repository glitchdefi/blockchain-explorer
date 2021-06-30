import GlobalApis from "src/services/apis/global";

export const onSubmittingToZendesk = async (data) => {
  try {
    const { firstName, lastName, message, email } = data;

    const res = await GlobalApis.createTicketOnZendesk({
      request: {
        requester: { name: `${firstName} ${lastName}`, email },
        subject: `Glitch Explore - HelpDesk from ${email}`,
        comment: { body: message },
      },
    });

    return res.status;
  } catch (err) {
    return 404;
  }
};
