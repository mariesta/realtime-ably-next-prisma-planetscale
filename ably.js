import Ably from "ably/promises";
import { useEffect } from 'react'

const ably = new Ably.Realtime(process.env.NEXT_PUBLIC_ABLY_API_KEY);

export function useAbly(channelName, processMessage) {
    const channel = ably.channels.get(channelName);

    useEffect(() => {
        channel.subscribe(msg => processMessage(msg))
        return () => channel.unsubscribe()
    })

    return [channel, ably];
}
