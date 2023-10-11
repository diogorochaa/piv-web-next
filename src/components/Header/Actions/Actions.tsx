import { Button } from '@/components/Button'
import { ArrowRightIcon } from '@/components/Icons'

export const Actions = () => {
  return (
    <div className="flex gap-2">
      <Button.Root>
        <Button.Content text="Login" />
        <Button.Icon icon={ArrowRightIcon} />
      </Button.Root>
      <Button.Root className="bg-green-400" success>
        <Button.Content text="Signup" />
        <Button.Icon icon={ArrowRightIcon} />
      </Button.Root>
    </div>
  )
}
