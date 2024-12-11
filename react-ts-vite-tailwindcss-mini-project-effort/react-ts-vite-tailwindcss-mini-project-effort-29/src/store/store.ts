import { create } from "zustand";
import { AlertStore, AnimateIconStore, ArrowStore, AutocompleteStore, AvatarState, BlurImages, ListState } from "../interface";


// alert button
export const useStore = create<AlertStore>((set) => ({
    isAlertVisible:false, 
    toggleAlert:() => set((state) => ({isAlertVisible:!state.isAlertVisible})),
}))

// animate icons 
export const useAnimateIconStore = create<AnimateIconStore>((set) => ({
    isAnimating:false,
    toggleAnimation:() => set((state) => ({isAnimating:!state.isAnimating}))
}))

// arrows
export const useArrowStore = create<ArrowStore>((set) => ({
    direction:'left',
    toggleDirection:() => set((state) => {
        const directions:('top' | 'right' | 'bottom' | 'left')[] = ['top','right','bottom','left']
        const currentIndex = directions.indexOf(state.direction);
        const nextIndex = (currentIndex + 1) % directions.length;
        return {
            direction:directions[nextIndex]
        }
    })
}))

export const useAutoCompleteStore = create<AutocompleteStore>((set) => ({
    query:'',
    setQuery:(query) => set({query}),
    suggestions:[],
    setSuggestions:(suggestions) => set({suggestions}),
}))

export const useAvatarImgStore = create<AvatarState>((set) => ({
    avatarUrl:null, // default avatar url is null (no avatar selected)
    setAvatarUrl:(url) => set({avatarUrl:url}) // function to update avatar URL
}))

export const useBlurImgStore = create<BlurImages>((set) => ({
    blurinensity:5,
    setBlurIntensity:(blurVal) => set({blurinensity:blurVal})
}))

export const useListStore = create<ListState>((set) => ({
    items: [],
  addItem: (text) => set((state) => ({
    items: [...state.items, { id: Date.now(), text, checked: false }]
  })),
  toggleItem: (id) => set((state) => ({
    items: state.items.map(item =>
      item.id === id ? { ...item, checked: !item.checked } : item
    )
  })),
  removeItem: (id) => set((state) => ({
    items: state.items.filter(item => item.id !== id)
  }))
}))

export const useBgDropDownMenuStore = create((set) => ({
    backgroundIColor:'white',// default bg color
    setBackgroundColor:(color:string) => set({backgroundIColor:color})
}))