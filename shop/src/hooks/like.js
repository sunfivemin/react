import { useState } from "react";

// use 붙은걸 커스텀 훅이라고함
export function useLike() {
    let [like, setLike] = useState(0);
    function addLike() {
        setLike((a) => {
            return a + 1;
        });
    }

    return [like, addLike];
}
