import { create } from "zustand";
import { AlertStore, AnimateIconStore, ArrowStore, AutocompleteStore, AvatarState, BgDropDownMenu, BlurImages, ChangeBgScrollProps, CharacterCounterProps, CheckedProps, CheckoutState, CheckoutStateProps, CircleDotsProps, ClayProps, ClearInputFieldProps, ClickDropdownsProps, ListState, MenuProps } from "../interface";


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

export const useBgDropDownMenuStore = create<BgDropDownMenu>((set) => ({
  backgroundColor:'white',// default bg color
    setBackgroundColor:(color:string) => set({backgroundColor:color})
}))

export const useBgColorScrollStore = create<ChangeBgScrollProps>((set) => ({
  backgroundColor:'orange', // default bg color 
  setBackgroundColor:(color:string) => set({backgroundColor:color})
}))

export const useCounterCharacterStore = create<CharacterCounterProps>((set) => ({
  count:0,
  setCount:(count) => set({count})
})) 

export const useCheckedStore = create<CheckedProps>((set) => ({
  isChecked:false,
  toggleChecked:() => set((state) => ({isChecked:!state.isChecked}))
}))

export const useCheckoutFormStore = create<CheckoutStateProps>((set) => ({
  name: '',
  email: '',
  address: '',
  setName: (name) => set(() => ({ name })),
  setEmail: (email) => set(() => ({ email })),
  setAddress: (address) => set(() => ({ address })),
}));

export const useCircleMenuStore = create<MenuProps>((set) => ({
  isMenuOpen:false,
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))


export const useCircleDotsStore = create<CircleDotsProps>((set) => ({
  isAnimating:false,
  toggleAnimation :() => set((state) => ({
    isAnimating:!state.isAnimating
  }))
}))

export const useClayStore = <ClayProps>((set) => ({
  isModalOpen:false,
  toggleModal:() => set((state) => ({
    isModalOpen:!state.isModalOpen
  }))
}))


export const useClearInputFieldStore = create<ClearInputFieldProps>((set) => ({
  isFieldInput: '', // Initial value of the input
  setIsFieldInput: (value: string) => set({ isFieldInput: value }), // Function to set input value
  clearInput: () => set({ isFieldInput: '' }), // Function to clear input value
}));

export const useClickDropdownsStore = create<ClickDropdownsProps>((set) => ({
  isDropdownOpen:false,
  toggleDropdown:() => set((state) => ({
    isDropdown:!state.isDropdown
  }))
}))