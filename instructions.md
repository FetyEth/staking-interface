# goal: UI matches Figma

## Steps

1. StakingProvider - wrap the app in a provider
2. see resources for what to export from the provider
3. <StakeButton /> - pull code from page component to create a new component
4. Stake button - calls the deposit function
5. <TokenBalance> - new component to show the token balance. pull code from page component to create a new component.
6. <TokenBalance> - show IJN balance in top right of the popup
7. <LockedUntil /> - new component to show the locked until date. pull code from page component to create a new component.
8. <LockedUntil /> - update with actual date withdrawal_time from now.
9. <PopupCard /> - new component to wrap the popup content. pull code from page component to create a new component.
10. Screen - show `blur` effect everywhere outside the popup
11. update "/" root route to show the popup, replacing the current code at that route.
12. remove any unused components / libs.
13. Update the README.md with getting started instructions and key features of the app.

## Resources

### StakingProvider

```tsx
const [stakeAmount, setStakeAmount] = useState<string>("");
const { login, authenticated } = usePrivy();
const { approve, isApproving } = useErc20Approve();
const { deposit, isDepositing } = useStakeDeposit();
const { data: balances } = useBalances();
```
