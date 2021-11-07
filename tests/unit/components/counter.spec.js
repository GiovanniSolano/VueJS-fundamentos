import { shallowMount,} from '@vue/test-utils';
import Counter from '@/components/Counter';

describe('Counter Component', () => {

    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(Counter);
    });



    // test('should be match with snapshot', () => {

    //     const wrapper = shallowMount(Counter);
    //     expect(wrapper.html()).toMatchSnapshot();
    // })

    // VALOR DE UNA ETIQUETA HTML
    test('should render h2 tag, default value "Counter"', () => {
        
        // INSTANCIA DEL COMPONENTE MONTADO
        // const wrapper = shallowMount(Counter);

        expect(wrapper.find('h2').exists()).toBeTruthy();

        const h2Value = wrapper.find('h2').text();

        expect(h2Value).toBe('Counter');


    })

    test('El valor por defecto debe ser 10 en el p', () => {
        
        // wrapper

        expect(wrapper.find('[data-testid="counter"]').exists()).toBeTruthy();
        // expect(wrapper.findAll('p')[1].exists()).toBeTruthy();

        const pValue = wrapper.find('[data-testid="counter"]').text();

        expect(pValue).toBe('100');

    })

    test('debe de incrementar y decrementar el contador', async() => {
        
        const [increaseBtn, decreaseBtn] = wrapper.findAll('button');

        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await increaseBtn.trigger('click');
        await decreaseBtn.trigger('click');
        await decreaseBtn.trigger('click');

        const pValue = wrapper.find('[data-testid="counter"]').text();

        expect(pValue).toBe('101');


    })

    test('debe establecer el valor por defecto', () => {
        
        // const {start} = wrapper.props;
        const start = wrapper.props('start');

        const pValue = wrapper.find('[data-testid="counter"]').text();

        expect(Number(pValue)).toBe(start);

    })


    test('debe de mostrar la prop title', () => {
        

        const title = 'Hola Mundo!!!';
        
        const wrapper = shallowMount(Counter, {
            props: {
                title
            }
        });

        expect(wrapper.find('h2').text()).toBe(title);



    })
    
    
  
})
