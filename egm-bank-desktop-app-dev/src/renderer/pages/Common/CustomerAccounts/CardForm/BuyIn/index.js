import { actions } from '../../../../../store';

const replacer = (key, value) => {
  // Return value as is, including 0
  return value === undefined ? null : value;
};

export const handleBuyInBalanceBtnClick = (
  wallet,
  amount,
  uid,
  name,
  uri,
  toast,
  dispatch
) => {
  const { scheme, host, port, path } = uri.BuyInBalance;

  if (amount > 0) {
    // Sending POST request
    fetch(`${scheme}://${host}:${port}${path}`, {
      method: 'POST',
      body: JSON.stringify(
        {
          uid: uid,
          wallet: wallet + amount,
          transBy: name,
          transType: 'BuyIn',
          transField: 'wallet',
          depositAmount: 0,
          withdrawAmount: amount,
          prevCredit: wallet,
          thenCredit: wallet + amount,
        },
        replacer
      ),
      headers: {
        'Content-Type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(`json data: ${data}`);
        dispatch(
          actions.players.PlayersRefresh({
            playersUri: uri.playersUri,
          })
        );
        toast({
          title: 'Success',
          description: 'Successfully added amount to wallet',
          status: 'success',
          duration: 3000,
          isClosable: true,
        });
        // dispatch(actions.card.cardReset());
        // dispatch(actions.filters.playerCardsUidReset());
      })
      .catch((error) => {
        toast({
          title: 'Failed',
          description: 'Error adding amoount to wallet',
          status: 'error',
          duration: 3000,
          isClosable: true,
        });
        console.error('Error:', error);
      });
  }
};
