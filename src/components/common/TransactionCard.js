import { Grid, Typography } from '@mui/material';
import React from 'react';

function TrendIcon() {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'>
			<rect
				y='6.10352e-05'
				width='24'
				height='24'
				fill='url(#pattern0)'
			/>
			<defs>
				<pattern
					id='pattern0'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'>
					<use
						xlinkHref='#image0_2001_198'
						transform='scale(0.00195312)'
					/>
				</pattern>
				<image
					id='image0_2001_198'
					width='512'
					height='512'
					xlinkHref='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAgAAAAIACAYAAAD0eNT6AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABjnSURBVHic7d1nuK1nVe/h/2KHIKA0BaLSLIBYEAmCBxUs9CbS7RXFjv3Ye8XesF9WVPRAVFCxguUcj2LBggUVFRUrGoUAISR+2EyTkF3eNdd85nifOe77usblN/Ku8a49xy8TYpLde0iSZyS5wYD/bABghR6S5FVJrkryM0neoPZxAIDRrnn8NyMCAOCAnen4b+ZnIwIA4OCc6/iLAAA4QEuO/2Z+LiIAAKZ3nOO/meckuWHFwwIAJ7fN8RcBADCxkxz/zfx8RAAATGMXx38zz01y470+PQBwbLs8/pt5XpI33OcPAQAsN+L4iwAAWLGRx38zvxoRAACrsY/jLwIAYEX2efw382tJ3mgfPxwAcF0Vx18EAEChyuO/mV+PCACAvVnD8RcBALBHazr+m/mNJDcZ+UMDQGdrPP4iAAAGWvPx38z/jQgAgJ16euoPvAgAgD27fpJnpP7AL5nnJ7nFmDUAQD+nkjwt9Qd+yfxORAAA7IwIAICmTiX54dQf+CXzuxEBALAzp5L8UOoP/NIIeOMxawCAfmaKgN+LCACAnTmV5AdTf+BFAADs2WwR8CZj1gAA/ZxK8gOpP/BL5vcjAgBgZ0QAADR1Ksn3p/7AL5kXJrlozBoAoJ9TSb4v9QdeBADAnl0v80TAnyR50yFbAICGRAAANHWU5KmpP/AiAAD2bKYI+NMkbzZmDQDQz1GSb0v9gRcBALBnR0m+NfUHXgQAwJ7NFAF/FhEAADszWwS8+Zg1AEA/R0m+JfUHfsn8eUQAAOzMUZJvTv2BXxoBtxmzBgDoZ6YIeHGSOwzZAgA0dJTkm1J/4EUAAOzZUZJvTP2BXzJ/neQthmwBABoSAQDQ1FGSb0j9gV8yfxMRAAA79RWpP/BLI+AtB+0AAFoSAQDQ1Jen/sAvjYC3GrQDAGjpy1J/4JfM30YEAMBOPSX1B95/HQCH78LXDbAiX5r6A79kXpLkrQftABjn+kmemeTZSW5Q/CzA6/mS1B94EQCHZ3P8N3+GfybJG5Q+EXAds0TAS5PcZdAOgN15/eMvAmDFvjj1B35pBLztoB0AJ3e247+Zn40IgNX5otQf+CXzjxEBsEbnO/6b+bmIAFgdEQBsY+nxv2YE3LDkSYGz+sLUH/ilEfB2Y1YAHMNxj/9mnhMRAKvzmak/8EvmnyICoNK2x18EwIrNFAFvP2gHwNmd9Phv5rlJbrzfRwfORwQAZ7Kr47+Z5yV5w73+BMB5fUbqD/zSCHiHQTsArrbr4y8CYMVmiYB/jgiAkUYd/838akQArM6np/7AL42Auw7aAXQ2+viLAFixT0v9gV8yL0ty8aAdQEf7Ov6b+bUkb7SXnwxYbKYIuMegHUAn+z7+IgBW7FNTf+BFAIxXdfw38+sRAbA6n5L6A79k/j3JOw/aARyy6uMvAmDFRAAcprUc/838RpKbDP2JgWP75NR/OCyNgHsO2gEckrUdfxEAK/bk1H84iAA4ubUe/808P8nNh/30wFaenOTK1H9AnG/+IyIAzmTtx18EwIp9dOaJgHsN2gHMaJbjf80IuMWQTQBbEwEwl9mO/2Z+JyIAVuejMk8EvMugHcAMZj3+IgBW7ImZIwIujQigp9mP/2Z+N8kb73g3wAk9MclrU/8Bcb55eZL7DtoBrNGhHH8RACsmAmBdDu34b+b3IgJgdT4y80TAe4xZAazCoR7/a0bAm+xsW8BOfEREAFQ69OO/md+PCIDVmSkC3nPQDqBCl+MvAmDFPjxzRMArIgI4DN2O/2ZeEBEAqzNTBLzXoB3APnQ9/pt5YZKLTrxFYKc+LCIARup+/DfzJ0ne9IS7BHZspgh470E7gBEcfxEAq/eEJFek/gNiSQTcb9AOYJccfxEA03hCktek/gPifHNZRADr5vife/40yZttvV1giJki4P6DdgAn4fiLAJjW4zNHBLwqycMG7QC24fgfb/4sIgBW53ERAXAcjv/2EfDmW+wbGGiWCHh1kocP2gEs4fifbP48IgBW57ERAXAujr8IgIM1UwQ8YtAO4Ewc/91HwG2O9QaA4Wb6HwY+dNAO4JouTHJJ6n/nl8wlmSdUXhQRAKvzmCSXp/4D4nzz6iTvM2gHkMz1d/7PTnKD1z3z/1nB8yyZv07yFktfBrAfj848EfDIQTugtxmP/8apJE9bwXOJAJiUCKCrmY//xqkkP7yC5xMBMKlHZY4IuDzJ+w7aAb0cwvHfOJXkh1bwnEvmb5K85Tl+FqDAQ3P6f3RX/QEhAhjtkI7/xqkkP7iC5xUBMKlZIuCKJO83aAcctkM8/huzRcBbHeNnA/bgIREBHKZDPv4bp5L8wAqef8n8bUQArM6DM08EvP+gHXBYOhz/jVNJvn8FP4cIgEk9OMkrU/8BsSQCPmDQDjgMnY7/xqkk37eCn2dpBLz1Dn5mYIdmioAPHLQD5tbx+G9cL/NEwEsiAmB1HhQRwJw6H/+NoyRPXcHPt2RemuQuA3YAnMBMEfBBg3bAXBz/qx0l+bYV/JxLI+Btx6wB2NYDIwKYg+N/XUdJvrXg59tm/jEiAFbnAZknAj540A5YN8f/7GaLgLcbswZgWw9IclnqPyCWRMCHDNoB6+T4n99Rkm/Z4nlFAJBkngh4bURAF47/ckdJvvkMz7XG+ackbz9mDcC27p95IuBDx6yAlXD8j+8oyTelfh8iACZ1nyQvT/0HxPnmyiRPGrQDajn+25stAt5hzBqAbd0nyX+l/gNiSQR8zKAdUMPxP7mjJN+Y+v0smX+OCIDVEQHsm+O/O0dJviH1exIBMKl3zzwR8LGDdsB+OP5jfEXq97U0Au46aAfAlkQAozn+Y3156ve2ZF6W5OJBOwC29G5J/jP1HxBLIuDjBu2AMRz//fiy1O9vaQTcY9AOgC3NFAEfP2gH7Jbjv19fmvo9Lpl/jwiA1XnXzBMBnzBoB+yG41/jS1K/z6UR8M6DdgBsSQRwUo5/rS9O/V5FAEzq3pknAj5x0A7YjuO/DjNFwD0H7QDY0r2TXJr6D4glEfBJg3bA8Tj+6/JFqd/zkvmPiABYnZki4MmDdsAyjv86fWHq9700Au41ZgXAtv5X5oiAq5L870E74Nwc/3X7zNTvfWkEvMugHQBbujin//nd6g+IJfNZg3bAmTn+cxABwNYuTvJvqf+AWDKfPWgHXJvjP5fPSP17WDKX5vQ3j8CK3D0igNMc/zl9eurfx5J5eZL7DtoBsKWZIuBzBu2gO8d/bp+W+veyNALeY8wKgG3NFAGfO2gHXTn+h+FTU/9+RABM6p2S/GvqPyCWzOcN2kE3jv9h+ZTUv6elEfCeg3YAbEkE9OH4H6ZZIuAVEQGwOnfLPBHw+YN2cOgc/8P2yal/b0sj4L0G7QDY0kwR8AWDdnCoHP8enpTT/x81q9+hCIAJ3S3Jv6T+A2LJfOWgHRwax7+Xj848EfDeg3YAbOkdIwIOhePf00dlngi436AdAFsSAfNz/HubJQIuiwiA1blr5omArxq0g1k5/iTJE5O8NvXveEkE3H/QDoAt3SXJS1P/AbFkvnrQDmbj+HNNH5k5IuBVSR46aAfAlmaKgKcM2sEsHH/O5CMyTwQ8bNAOgC29TZJ/SP0HhAg4O8efc/nwzBEBr07y8EE7ALY0UwR8zaAdrJXjzxIiANjaTBHwtYN2sDaOP8fxYZknAh4xaAfAlu6c5O9T/wGxZL5u0A7WwvFnG++X5IrU/06IAJiQCKjn+HMST0jymtT/biyJgPcZtANgSzNFwNcnORqzhhKOP7swUwQ8ctAOgC3dKfNEwFNzGBHg+LNLj48IALZ0pyR/l/oPiCXz7Zk7Ahx/Rnhc5oiAy5O876AdAFu6Y+aJgO/InBHg+DPSYzNPBDxq0A5mVvU+IIkIGMnxZx8ekzki4Iqc/icZuFrVu4D/ccckL0n9B8SS+c4k1xuzhp1y/Nmnx+T032VX/y6db65I8v6DdjCjqvcA13KHJC9O/QfEkll7BDj+VHh0RMBsqt4BXMcdMk8EfFfWGQGOP5UelXki4AMG7WAmVfuHM7p9kr9K/QfEkvnurCsCHH/W4KE5/W/oq/4dO99ckeQDB+1gFlW7h7O6feaJgO/JOiLA8WdNRMAcqvYO53T7iIClHH/W6CGZJwI+aNAO1q5q53Bet0vyl6n/gFgy35uaCHD8WbMHJ3ll6n/3zjdXJPngQTtYs6p9wyIi4Owcf2bwoMwTAR8yaAdrVbVrWOx2Sf4i9R8QS+ZHkpwas4ZrcfyZySwR8Nr0ioCqPcOx3DZzRcAFY9aQxPFnTg/MPBHwoWNWsDpVO4ZjmykCfjRjIsDxZ2YPSHJZ6n83zzdXJnnSoB2sSdV+YSudI8Dx5xDMFAEfM2gHa1G1W9jabZO8KPUfEEvmx7KbCHD8OST3TfLy1P+unm+uTPKxg3awBlV7hRO5TfpEgOPPIbpPkv9K/e/s+eaQI6Bqp3BiFyV5Yeo/IJbM07NdBDj+HLKZIuDjBu2gUtU+YScuSvLHqf+AWDI/nuNFgONPB+8eEVClapewM7fOXBFw/QU/k+NPJ++W5D9T/7t8vrkyyccP2kGFqj3CTs0UAT+Rc0eA409HM0XAJwzawb5V7RB27tZJ/ij1HxBL5mwR4PjT2btmngj4xEE72Keq/cEQM0XAs3LtA+r4gwjYp6rdwTC3ynwR4PjD1e6d5NLU/66fb65M8kmDdrAPVXuDoWb6pwOemeSSFTzHkrkkyYXHeA+wrZki4MmDdjBa1c5guFsl+cPUf0Acyvg7f/bt4iQvS/3v/pL5rEE7GKlqV7AXt0ryB6n/cJh9HH+qXJzk31L/Z2DJfPagHYxStSfYm1tGBJxkHH+q3T0iYISqHcFeiYDtxvFnLWaKgM8ZtINdq9oP7N0tk7wg9R8Os4zjz9q8U5J/Tf2fjSXzuYN2sEtVu4ESN0/y/NR/OKx9HH/WaqYI+LxBO9iVqr2Uqf6F6DRrdfMkv536/ax1HH/W7m4RAbtQtZMy1b8MnWbNRMCZx/FnFndL8i+p/zOzZD5/0A5OqmofZap/ETrN2t0sIuCa4/gzm3fMPBHwBYN2cBJVuyhT/UvQaWZwsyS/lfpdVY/jz6zumnki4CsH7WBbVXsoU/0L0Glm0T0CHH9md5ckL039n6Uls6YIqNpBmeqX32lmcrMk/z/1O9v3OP4cirdJ8g+p/zO1ZL5q0A6Oq+rnL1P94jvNbLpFgOPPoREBx1P1s5epfumdZkY3TfKbqd/d6HH8OVR3zjwR8NWDdrBUu9tQ/cI7zawOPQIcfw7dnZP8fer/rC2ZpwzawRLtbkP1y+40M7tpkv+X+h3uehx/upgpAr5m0A7Op91tqH7RnWZ2hxYBjj/d3CnJ36X+z96SqYiAdreh+iV3mkNwkxxGBDj+dHXHzBMBXztoB2fT7jZUv+BOcyhunOS5qd/ntuP4091MEfB1g3ZwJu1uQ/XL7TSHZNYIcPzhtDskeXHq/0wuma9PcjRkC9fW7jZUv9hOc2hunORXUr/XpeP4w7XdIfNEwFMzPgLa3Ybql9ppDtEsEeD4w5ndPslfpf7P6JL59oyNgHa3ofqFdppDdeMkv5z6/Z5tHH84t9tnngj4joyLgHa3ofpldppDdqOsMwIcf1jmdkn+MvV/ZpfMqAhodxuqX2SnOXRriwDHH45npgj4ziTX2/HP3+42VL/ETtPBjZL8Uup37fjDdm6X5C9S/2d4yew6AtrdhuoX2Gm6qI4Axx9O5raZJwK+K7uLgHa3ofrldZpObpTkF7P/HTv+sBu3TfKi1H9uLpnvzm4ioN1tqH5xnaabGyX5hexvv44/7NZtMk8EfE9OHgHtbkP1S+s0Hd0w+4kAxx/GuCjJC1P/+blkThoB7W5D9QvrNF2NjgDHH8a6KMkfp/4zdMl8b7aPgHa3ofpldZrObpDkWdn9Th1/2I9bZ54IeFqSU1v8jO1uQ/WL6jTd3SDJT2d3+3T8Yb9uneSPUv9ZumR+JMkFx/z52t2G6pfUadhdBDj+UOOQI6Ddbah+QZ2G0y5M8lPZfo+OP9S6VZI/TP1n6pL50SyPgHa3ofrldBqutm0EOP6wDrdK8gep/1xdMj+WZRHQ7jZUv5hOw7VdmOQns3x/jj+syy1zWBHQ7jZUv5ROw3UtjQDHH9Zppgh4es4dAe1uQ/UL6TSc2YVJLsnZ9+b4w7rdMskLUv8Zu2TOFQHtbkP1y+g0nN3ZIsDxhzncPMlvp/5zdsn8eJLrn+FnaHcbql9Ep+HcLkzyzFy9L8cf5jJTBPxErhsB7W5D9UvoNJzfJgIcf5jTzZL8Vuo/b5fM60dAyXMcHXfDO+Qw7U/le57Jha/7v5eXPgWwrVvk9L//4+7VD7LAM5I8IclrUnQPBUAPAgDo4mZJnpPkntUPssCzkzw6yasq/uICoAcBAHRy8yQ/n+Qe1Q+ywCVJHlnxFxYAPQgAoJub5vQ3AfeqfpC12vbfXQwAa3Zpkgcm+c3qB1krAQDAobo0yYMiAs5IAABwyC5Ncr8kz6t+kLURAAAculckeWiS5xY/x6oIAAA6eEWSh0UE/A8BAEAXmwj4leoHWQMBAEAnIuB1BAAA3VyW0xHwy9UPUkkAANDRZUkensYRIAAA6GoTAb9U/SAVBAAAnV2W5BFJfrH6QfZNAADQ3SYCfqH6QfZJAABA8sqc/q8DnlX9IPsiAADgtFcneUyaRIAAAICrvTrJo5P8dPWDjCYAAODaLs/pbwJ+qvpBRhIAAHBdlyd5bA44AgQAAJzZJgJ+svpBRhAAAHB2lyd5XJJLqh9k1wQAAJzb5UkenwOLgAuqHwCY1lXVD9DEUdFf1/s9cL4BAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGjoguoHAGCVjqofgLF8AwAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQ0AXVD8BBu6r6AZo4qn4AYD6+AQCAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABo6ILqBwBgla6qfoBGjir+or4BAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABoSAADQkAAAgIYEAAA0JAAAoCEBAAANCQAAaEgAAEBDAgAAGhIAANCQAACAhgQAADQkAACgIQEAAA0JAABoSAAAQEMCAAAaEgAA0JAAAICGBAAANCQAAKAhAQAADQkAAGhIAABAQwIAABo6SnJV9UMAAHt1hW8AAKCfVwoAAOhHAABAQ68SAADQj28AAKAh3wAAQEO+AQCAhnwDAAAN+QYAABryDQAANOQbAABoyDcAANCQbwAAoCHfAABAQ74BAICGfAMAAA35BgAAGvINAAA05BsAAGjINwAA0JBvAACgId8AAEBDvgEAgIZ8AwAADfkGAAAa8g0AADTkGwAAaMg3AADQ0CuPklxV/RQAwF5d/78B746YifEEc64AAAAASUVORK5CYII='
				/>
			</defs>
		</svg>
	);
}

function StackedIcon() {
	return (
		<svg
			width='24'
			height='24'
			viewBox='0 0 24 24'
			fill='none'
			xmlns='http://www.w3.org/2000/svg'
			xmlnsXlink='http://www.w3.org/1999/xlink'>
			<rect
				y='6.10352e-05'
				width='24'
				height='24'
				fill='url(#pattern0)'
			/>
			<defs>
				<pattern
					id='pattern0'
					patternContentUnits='objectBoundingBox'
					width='1'
					height='1'>
					<use
						xlinkHref='#image0_2001_198'
						transform='scale(0.00195312)'
					/>
				</pattern>
				<image
					id='image0_2001_198'
					width='512'
					height='512'
					xlinkHref='data:image/png;base64,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'
				/>
			</defs>
		</svg>
	);
}

export default function TransactionCard(props) {
	const { title, count, growth, isPositive, icon } = props;

	return (
		<Grid
			container
			spacing={1}
			alignItems={'center'}
			className='dark-grey-rectangle-card card-padding m-0 w-auto'>
			<Grid item md={2} className='p-0'>
				<div className='white-bg-circle'>
					{icon === 'trend' ? <TrendIcon /> : <StackedIcon />}
				</div>
			</Grid>
			<Grid item md={9} className='p-0'>
				<Typography variant='overline'>
					{count}
					{' LPDX'}
				</Typography>
				<Typography variant='body1'>{title}</Typography>
			</Grid>
			<Grid
				item
				md={1}
				className={`p-0 ${isPositive ? 'green-font' : 'red-font'}`}>
				{growth}
			</Grid>
		</Grid>
	);
}